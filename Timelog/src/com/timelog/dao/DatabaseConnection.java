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
			connect=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/timelog?user=localroot&password=localroot");
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
	public void insertNewTickets(String ticketNo,String ticketDesc) throws Exception{
		try {		
			statement=connect.createStatement();
			int result=statement.executeUpdate("INSERT INTO tickets(`TicketNo`,`TicketDescription`,`TicketStatus`) VALUES ('"+ticketNo+"','"+ticketDesc+"' , 'open')");			
		}catch(Exception e) {
			throw e;
		}
	}
//	public int insertUsersTicketsTable(String ticketNo)throws Exception{
//		try {
//			statement=connect.createStatement();
//			ResultSet result=statement.executeQuery("select TicketID from tickets where TicketNo='"+ticketNo+"';");
//			while(result.next()) {
//				int ticketID=result.getInt("TicketID");
//				System.out.println("ticketID = "+ticketID);
//			}
//		}catch(Exception e) {
//			throw e;
//		}
//	}
	public ResultSet getuserpassword(String username,String password) throws Exception{
		try {
			statement=connect.createStatement();
			ResultSet result=statement.executeQuery("select * from timelog.users where userName='"+username+"' and password='"+password+"';");
			System.out.println("result: "+result);
			return result;
		}catch(Exception e) {
			System.out.println("error :"+e);
			throw e;
		}
	}
}
