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
 * Servlet implementation class LoggedUser
 */
@WebServlet("/loggeduser")
public class LoggedUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoggedUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			String user = "";
			boolean islogged = false;
			Cookie ck[] = request.getCookies();
			for(int i = 0; i < ck.length; i++) {
				if(ck[i].getName().equals("loggeduser")) {
					islogged = true;
					user = ck[i].getValue();
					break;
				}
			}
			
			if(islogged) {
				Map<String, String> mp = new TreeMap<String, String>();
				ResultSet rs = null;
				try {
					PreparedStatement ps = Database.getStatement("select * from users where username = ?");
					ps.setString(1, user);
					rs = ps.executeQuery();
					//String personal = request.getParameter("personal");
					if(rs.next()) {
						mp.put("code", "3");
						mp.put("message", "Login Success");
						mp.put("username", rs.getString(2));
						//mp.put("personal", personal);
					} else {
						mp.put("code", "0");
						mp.put("message", "Username does not exist");					
					}	
					out.println(new Gson().toJson(mp));
					out.flush();
					out.close();
				}catch(Exception e) {
					mp.put("code", "0");
					mp.put("message", e.toString());
					out.println(new Gson().toJson(mp));
				}
			}
	}

	}
}
