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
 * Servlet implementation class Project
 */
@WebServlet("/project")
public class Project extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Project() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try(PrintWriter out = response.getWriter()) {
		response.setContentType("application/json");
		String title = request.getParameter("title");
		String description = request.getParameter("description");
		String startdate = request.getParameter("startdate");
		String enddate = request.getParameter("enddate");
		String link = request.getParameter("link");
		String username = request.getParameter("username");
		int number = Integer.parseInt(request.getParameter("number"));
		PreparedStatement ps = Database.getStatement("select * from  project where username = '"+username+"' and number = "+number+"");
		Map<String, String> mp = new TreeMap<String, String>();
		try {
			ResultSet rs = ps.executeQuery();
			if(rs.next()) {
				ps = Database.getStatement("update project set title = ?, description = ?, link = ?, startdate = ?, enddate = ? where username = ? and number = "+number+"");
				ps.setString(1, title);
				ps.setString(2, description);
				ps.setString(3, link);
				ps.setString(4, startdate);
				ps.setString(5, enddate);
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
				ps = Database.getStatement("insert into project values(?, ?, ?, ?, ?, ?, ?)");
				ps.setString(1, title);
				ps.setString(2, description);
				ps.setString(3, startdate);
				ps.setString(4, enddate);
				ps.setString(5, link);
				ps.setInt(6, number);
				ps.setString(7, username);
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
