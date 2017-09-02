package com.users.java;

public class SecondaryDetails {
	private String value, table, schools, board;
	private int yog;
	private double percentage;
	public SecondaryDetails(String value, String table, String schools, String board, int yog, double percentage) {
		super();
		this.value = value;
		this.table = table;
		this.schools = schools;
		this.board = board;
		this.yog = yog;
		this.percentage = percentage;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getTable() {
		return table;
	}
	public void setTableName(String tableName) {
		this.table = table;
	}
	public String getSchools() {
		return schools;
	}
	public void setSchools(String schools) {
		this.schools = schools;
	}
	public String getBoard() {
		return board;
	}
	public void setBoard(String board) {
		this.board = board;
	}
	public int getYog() {
		return yog;
	}
	public void setYog(int yog) {
		this.yog = yog;
	}
	public double getPercentage() {
		return percentage;
	}
	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}
	
	
}
