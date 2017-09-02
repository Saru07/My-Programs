package com.users.java;

public class HscDetails {
	private String value, table, schools, board, stream;
	private int yog, percentage;
	public HscDetails(String value, String table, String schools, String board, String stream, int yog,
			int percentage) {
		super();
		this.value = value;
		this.table = table;
		this.schools = schools;
		this.board = board;
		this.stream = stream;
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
	public void setTable(String table) {
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
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	public int getYog() {
		return yog;
	}
	public void setYog(int yog) {
		this.yog = yog;
	}
	public int getPercentage() {
		return percentage;
	}
	public void setPercentage(int percentage) {
		this.percentage = percentage;
	}
	
	
}
