package com.users.java;

public class ExtraDetails {
	private String value, table, description;
	private int number;
	public ExtraDetails(String value, String table, String description, int number) {
		super();
		this.value = value;
		this.table = table;
		this.description = description;
		this.number = number;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	
	

}
