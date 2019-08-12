<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@page import="java.sql.*,java.util.*"%>
<%
	String ticket_name = request.getParameter("ticket_name");
	String ticket_description = request.getParameter("ticket_description");

	try {
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/timelog", "root",
				"localroot");
		Statement st = conn.createStatement();

		int i = st.executeUpdate("insert into tickets(TicketNo,TicketDescription,TicketStatus)values('"
				+ ticket_name + "','" + ticket_description + "','open')");
		out.println("Data is successfully inserted!");
	} catch (Exception e) {
		System.out.print(e);
		e.printStackTrace();
	}
%>