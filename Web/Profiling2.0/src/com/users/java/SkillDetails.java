package com.users.java;

public class SkillDetails {
	private String value, table, skill;
	private int number;
	public SkillDetails(String value, String table, String skill, int number) {
		super();
		this.value = value;
		this.table = table;
		this.skill = skill;
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
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	
	
}
