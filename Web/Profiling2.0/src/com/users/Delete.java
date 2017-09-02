package com.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
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
 * Servlet implementation class Delete
 */
@WebServlet("/delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
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
			String tableName = request.getParameter("tableName");
			int number = Integer.parseInt(request.getParameter("number"));
			PreparedStatement ps = Database.getStatement("delete from "+tableName+" where username = '"+username+"' and number = "+number+"");
			Map<String, String> mp = new TreeMap<String, String>();
			
			try {
				int n = ps.executeUpdate();
				if(n > 0){
					mp.put("code", "1");
					mp.put("message", "Successfully Deleted");
					mp.put("username", username);
				}
				else {
					mp.put("code", "0");
					mp.put("message", "Error in deletion");
				}
				out.println(new Gson().toJson(mp));	
				out.flush();
				out.close();
			}catch(Exception e){
				mp.put("table", tableName);
				mp.put("username", username);
				mp.put("value", "error");
				mp.put("message", e.toString());
				out.println(new Gson().toJson(mp));	
				out.flush();
				out.close();
			}
		}catch(Exception e) {
			
		}
	}

}
