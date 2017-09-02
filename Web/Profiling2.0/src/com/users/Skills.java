package com.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.users.java.Database;

/**
 * Servlet implementation class Skills
 */
@WebServlet("/skills")
public class Skills extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Skills() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			String skill = request.getParameter("skill");
			String username = request.getParameter("username");
			int number = Integer.parseInt(request.getParameter("number"));
			PreparedStatement ps = Database.getStatement("select * from  skills where username = '"+username+"' and number = "+number+"");
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					ps = Database.getStatement("update skills set skill = ? where username = ? and number = "+number+"");
					ps.setString(1, skill);
					ps.setString(2, username);
					int val = ps.executeUpdate();
					if(val > 0) {
						mp.put("code", "1");
						mp.put("message", "Successfully Updated");
						mp.put("username", username);
					}
					else {
						mp.put("code", "0");
						mp.put("message", "Error in updation");
					}
				}
				else {
					ps = Database.getStatement("insert into skills values(?, ?, ?)");
					ps.setString(1, skill);
					ps.setInt(2, number);
					ps.setString(3, username);
					int val = ps.executeUpdate();
					if(val > 0){
						mp.put("code", "1");
						mp.put("message", "Successfully Inserted");
						mp.put("username", username);
					}
					else {
						mp.put("code", "0");
						mp.put("message", "Error in insertion");
					}
				}
				out.println(new Gson().toJson(mp));
				out.flush();
				out.close();
			} catch(Exception e) {
				mp.put("code", "0");
				mp.put("message", e.toString());
				out.println(new Gson().toJson(mp));
			}
	}
	}

}
