package com.timelog.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


public class DatabaseConnection {
	private Connection connect;
	private Statement statement;
	private ResultSet resultset;
	
	public void connectToDatabase() throws Exception{
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connect=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/timelog?user=root&password=localroot");
		}catch(Exception e) {
			throw e;
		}
	}
	public ResultSet readDatabases() throws Exception {
		try {		
			statement=connect.createStatement();
			resultset=statement.executeQuery("select * from timelog.tickets");
			return resultset;
		}catch(Exception e) {
			throw e;
		}
	}
}
