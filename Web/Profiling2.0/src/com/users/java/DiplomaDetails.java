package com.users.java;

public class DiplomaDetails {
	private String value, table, college, startDate, endDate, stream, cgpa;
	private int number;

	public DiplomaDetails(String value, String table, String college, String startDate, String endDate, String stream, String cgpa, int number) {
		super();
		this.value = value;
		this.table = table;
		this.college = college;
		this.startDate = startDate;
		this.endDate = endDate;
		this.stream = stream;
		this.cgpa = cgpa;
		this.number = number;
	}	
	
	

	public String getTable() {
		return table;
	}



	public void setTable(String table) {
		this.table = table;
	}



	public String getValue() {
		return value;
	}



	public void setValue(String value) {
		this.value = value;
	}



	public int getNumber() {
		return number;
	}


	public void setNumber(int number) {
		this.number = number;
	}


	public String getCollege() {
		return college;
	}

	public void setCollege(String college) {
		this.college = college;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getStream() {
		return stream;
	}

	public void setStream(String stream) {
		this.stream = stream;
	}

	public String getCgpa() {
		return cgpa;
	}

	public void setCgpa(String cgpa) {
		this.cgpa = cgpa;
	}
	
	
}
