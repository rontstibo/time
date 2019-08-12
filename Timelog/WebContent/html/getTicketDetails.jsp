<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="com.timelog.dao.controller"%>   
<%@page import="java.sql.ResultSet" %>   

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Ticket Details screen</title>
</head>
<body>
<h1> Ticket Details</h1>
<% 
controller controlObj=new controller();
String jobj=controlObj.GetAllTicketDetails();
out.println("test print"+jobj);
%> 
</body>
</html>