<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="com.timelog.dao.DatabaseConnection"%>   
<%@page import="java.sql.ResultSet" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Ticket Details screen</title>
</head>
<body>
<h1> Ticket Details</h1>
<%DatabaseConnection db= new DatabaseConnection();
db.connectToDatabase();
ResultSet result=db.readDatabases(); %> 
 <TABLE BORDER="1" CELLPADDING="10">
    <TR>
        <TH>ID</TH>
        <TH>TicketNo</TH>
        <TH>Ticket Description</TH>
        <TH>Ticket Status</TH>
    </TR>
    <% while(result.next()){ %>
    <TR>
        <TD> <%= result.getInt(1) %></td>
        <TD> <%= result.getString(2) %></TD>
        <TD> <%= result.getString(3) %></TD>
        <TD> <%= result.getString(4) %></TD>
    </TR>
    <% } %>
 </TABLE>
</body>
</html>