package com.users.java;

public class PersonalDetails {
	
	private String value, table, firstName, lastName, dob, city, phoneNumber, photo;
	
	public PersonalDetails(String value, String table, String firstName, String lastName, String dob, String city, String phoneNumber,
			String photo) {
		super();
		this.value = value;
		this.table = table;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.city = city;
		this.phoneNumber = phoneNumber;
		this.photo = photo;
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



	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	
	
}
