<%@page import="com.timelog.dao.*"%>   
<%@page import="java.sql.ResultSet" %>   
<jsp:include page='common/header.jsp'>
    <jsp:param name="title" value="Ticket Details screen"/>
</jsp:include>
<h1> Ticket Details</h1>
<% 
controller controlObj=new controller();
String jobj=controlObj.GetAllTicketDetails();
out.println("test print"+jobj);
%> 
<%@include file="common/footer.jsp" %>