package com.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
 * Servlet implementation class PersonalDetails
 */
@WebServlet("/personal")
public class PersonalDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PersonalDetails() {
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
			String username = request.getParameter("username");
			String firstName = request.getParameter("firstName");
			String lastName = request.getParameter("lastName");
			String dob = request.getParameter("dob");
			String city = request.getParameter("city");
			String phoneNumber = request.getParameter("phoneNumber");			
			String photo = request.getParameter("photo");
			PreparedStatement ps = Database.getStatement("select * from personal where username = ?");
			ps.setString(1, username);
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					ps = Database.getStatement("update personal set firstName = ?, lastName = ?, dob = ?, city = ?, photo = ?, phoneNumber = ? where username = ?");
					ps.setString(1, firstName);
					ps.setString(2, lastName);
					ps.setString(3, dob);
					ps.setString(4, city);
					ps.setString(5, photo);
					ps.setString(6, phoneNumber);
					ps.setString(7, username);
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
					ps = Database.getStatement("insert into personal values(?, ?, ?, ?, ?, ?, ?)");
					ps.setString(1, firstName);
					ps.setString(2, lastName);
					ps.setString(3, dob);
					ps.setString(4, city);
					ps.setString(5, phoneNumber);
					ps.setString(6, photo);
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
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	}

}
