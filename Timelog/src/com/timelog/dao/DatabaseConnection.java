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
		String result="";
		try {
		
			statement=connect.createStatement();
			resultset=statement.executeQuery("select * from timelog.tickets");
			/*while(resultset.next()) {
				int id=resultset.getInt("TicketID");
				String ticketno=resultset.getString("TicketNo");
				String ticketdesc=resultset.getString("TicketDescription");
				String ticketstatus=resultset.getString("TicketStatus");
				System.out.println(String.format(
						"%d %5s %5s %5s", id, ticketno,ticketdesc,ticketstatus));
				result+=id+" "+ticketno+" "+ticketdesc+" "+ticketstatus+"\n";
			
			}
			if(resultset!=null) {
				resultset.close();
			}
			if(statement!=null) {
				statement.close();
			}
			if(connect!=null) {
				connect.close();
			}*/
			return resultset;
		}catch(Exception e) {
			throw e;
		}
	}
}
