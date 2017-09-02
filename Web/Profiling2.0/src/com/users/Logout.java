package com.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Logout
 */
@WebServlet("/logout")
public class Logout extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Logout() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			Cookie ck[] = request.getCookies();
			Map<String, String> mp = new TreeMap<String, String>();
			for(int i = 0 ; i < ck.length; i++) {
				if(ck[i].getName().equals("loggeduser")) {
					ck[i].setMaxAge(0);
					response.addCookie(ck[i]);					
					mp.put("code", "2");
					mp.put("message", "Logout Success");
				}
			}
			out.println(new Gson().toJson(mp));
			out.flush();
			out.close();
		}catch(Exception e) {}
	}

}
