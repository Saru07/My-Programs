package com.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.users.java.Database;

/**
 * Servlet implementation class Signup
 */
@WebServlet("/signup")
public class Signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Signup() {
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
			String password = request.getParameter("password");
			String email = request.getParameter("email");
			PreparedStatement ps = Database.getStatement("select * from users where username = ?");
			ps.setString(1, username);
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					mp.put("code", "0");
					mp.put("message", "Username already exists");
				}
				else  {
					ps = Database.getStatement("insert into users values(null, ?, ?, ?)");
					ps.setString(1, username);
					ps.setString(2, password);
					ps.setString(3, email);
					ps.executeUpdate();
					Cookie ck = new Cookie("loggeduser", username);
					ck.setMaxAge(60 * 60);
					response.addCookie(ck);
					mp.put("code", "1");
					mp.put("message", "Successfully signed up");
					mp.put("username", username);
				}	
				out.println(new Gson().toJson(mp));
				out.flush();
				out.close();
			} catch(Exception e) {
				out.println(new Gson().toJson(mp));
			}
		} catch(Exception e) {}
	}

}
