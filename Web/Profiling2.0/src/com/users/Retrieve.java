package com.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.users.java.Database;
import com.users.java.DiplomaDetails;
import com.users.java.ExtraDetails;
import com.users.java.GraduationDetails;
import com.users.java.HscDetails;
import com.users.java.InternshipDetails;
import com.users.java.Jobs;
import com.users.java.PersonalDetails;
import com.users.java.PgDetails;
import com.users.java.PhdDetails;
import com.users.java.ProjectDetails;
import com.users.java.SecondaryDetails;
import com.users.java.SkillDetails;


/**
 * Servlet implementation class Retrieve
 */
@WebServlet("/retrieve")
public class Retrieve extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Retrieve() {
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
			PreparedStatement ps = Database.getStatement("select * from "+tableName+" where username = ?");
			ps.setString(1, username);
			
			Map<String, String> mp = new TreeMap<String, String>();
			
 			try {
				ResultSet rs = ps.executeQuery();
				//mp.put("error", rs.getString(1));
				/*
				if(rs.next()){
					mp.put("code", "1");
					mp.put("message", "retrieve success");
				}
				else {
					mp.put("code", "0");
					mp.put("message", "retrieve error");
				}
				*/
				if(rs.next()) {
					if(tableName.equals("personal")) {
						List<PersonalDetails> li = new LinkedList<PersonalDetails>();
						li.add(new PersonalDetails("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6)));
						out.println(new Gson().toJson(li));	
					}
					
					else if(tableName.equals("internship")) {
						
						List<InternshipDetails> li = new LinkedList<InternshipDetails>();
						li.add(new InternshipDetails("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						while(rs.next()) {
							li.add(new InternshipDetails("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						}
						
						out.println(new Gson().toJson(li));
					}
					
					else if(tableName.equals("jobs")) {
						List<Jobs> li = new LinkedList<Jobs>();
						li.add(new Jobs("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						while(rs.next()) {
							li.add(new Jobs("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						}
						
						out.println(new Gson().toJson(li));
					}
					
					else if(tableName.equals("project")) {
						List<ProjectDetails> li = new LinkedList<ProjectDetails>();
						li.add(new ProjectDetails("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getInt(6)));
						while(rs.next()) {
							li.add(new ProjectDetails("1", tableName, rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getInt(6)));
						}
						out.println(new Gson().toJson(li));
					}
					
					else if(tableName.equals("extra")) {
						List<ExtraDetails> li = new LinkedList<ExtraDetails>();
						li.add(new ExtraDetails("1", tableName, rs.getString(1), rs.getInt(2)));
						while(rs.next()) {
							li.add(new ExtraDetails("1", tableName, rs.getString(1), rs.getInt(2)));
						}
						out.println(new Gson().toJson(li));
					}
					
					else if(tableName.equals("skills")) {
						List<SkillDetails> li = new LinkedList<SkillDetails>();
						li.add(new SkillDetails("1", tableName, rs.getString(1), rs.getInt(2)));
						while(rs.next()) {
							li.add(new SkillDetails("1", tableName, rs.getString(1), rs.getInt(2)));
						}
						out.println(new Gson().toJson(li));
					}
					else if(tableName.equals("secondary")) {
						List<SecondaryDetails> li = new LinkedList<SecondaryDetails>();
						li.add(new SecondaryDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getInt(3), rs.getDouble(4)));
						out.println(new Gson().toJson(li));
					}
					else if(tableName.equals("hsc")) {
						List<HscDetails> li = new LinkedList<HscDetails>();
						li.add(new HscDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(4), rs.getInt(3), rs.getInt(5)));
						out.println(new Gson().toJson(li));
					}
					else if(tableName.equals("diploma")) {
						List<DiplomaDetails> li = new LinkedList<DiplomaDetails>();
						li.add(new DiplomaDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getInt(7)));
						while(rs.next())
							li.add(new DiplomaDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getInt(7)));
						out.println(new Gson().toJson(li));
					}
					else if(tableName.equals("graduation")) {
						List<GraduationDetails> li = new LinkedList<GraduationDetails>();
						li.add(new GraduationDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(8)));
						while(rs.next())
							li.add(new GraduationDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						out.println(new Gson().toJson(li));
					}
					else if(tableName.equals("pg")) {
						List<PgDetails> li = new LinkedList<PgDetails>();
						li.add(new PgDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(8)));
						while(rs.next())
							li.add(new PgDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						out.println(new Gson().toJson(li));
					}
					else if(tableName.equals("phd")) {
						List<PhdDetails> li = new LinkedList<PhdDetails>();
						li.add(new PhdDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(8)));
						while(rs.next())
							li.add(new PhdDetails("1", tableName, rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));
						out.println(new Gson().toJson(li));
					}
					
				}
				else {
					mp.put("table", tableName);
					mp.put("username", username);
					mp.put("value", "none");
					out.println(new Gson().toJson(mp));	
				}
							
				//out.println(new Gson().toJson(mp));	
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
