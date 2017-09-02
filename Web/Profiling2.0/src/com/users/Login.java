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
 * Servlet implementation class Login
 */
@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//System.out.println("in servlet");
		try(PrintWriter out = response.getWriter()){
			response.setContentType("application/json");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				String username = request.getParameter("username");
				String password = request.getParameter("password");
				PreparedStatement ps = Database.getStatement("select *from users where username=? and password = ?");
				ps.setString(1, username);
				ps.setString(2, password);
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					Cookie ck = new Cookie("loggeduser", username);
					ck.setMaxAge(60 * 60);
					response.addCookie(ck);
					li.put("code", "1");
					li.put("message", "successfully logged in");
					li.put("username", username);
				} else {
					li.put("code", "0");
					li.put("message", "invalid username or password");
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e){
				li.put("code", "0");
				li.put("message", "Unable to connect");
				out.println(new Gson().toJson(li));
			}
		} 
		
	}

}
