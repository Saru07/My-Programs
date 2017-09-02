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
 * Servlet implementation class Diploma
 */
@WebServlet("/diploma")
public class Diploma extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Diploma() {
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
			String college = request.getParameter("college");
			String startDate = request.getParameter("startDate");
			String endDate = request.getParameter("endDate");
			String stream = request.getParameter("stream");
			String cgpa = request.getParameter("cgpa");
			String username = request.getParameter("username");
			int number = Integer.parseInt(request.getParameter("number"));
			PreparedStatement ps = Database.getStatement("select * from  diploma where username = '"+username+"' and number = "+number+"");
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					ps = Database.getStatement("update diploma set college = ?, startDate = ?, endDate = ?, stream = ?, cgpa = ? where username = ? and number = "+number+"");
					ps.setString(1, college);
					ps.setString(2, startDate);
					ps.setString(3, endDate);
					ps.setString(4, stream);
					ps.setString(5, cgpa);
					ps.setString(6, username);
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
					ps = Database.getStatement("insert into diploma values(?, ?, ?, ?, ?, ?, ?)");
					ps.setString(1, college);
					ps.setString(2, startDate);
					ps.setString(3, endDate);
					ps.setString(4, stream);
					ps.setString(5, cgpa);
					ps.setString(6, username);
					ps.setInt(7, number);
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
