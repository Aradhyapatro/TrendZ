package com.TrendZ.Ecomm.DTO;

public class LoginUser {
	private String email;
	private String password;

	public LoginUser(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public LoginUser() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
