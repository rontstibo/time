<jsp:include page='common/header.jsp'>
    <jsp:param name="title" value="Ticket Details screen"/>
</jsp:include>
	<h1>Create Ticket</h1>
	<form method="post" action="createTicketDetails.jsp">
		Ticket No: <input type="text" name="ticket_name"> <br>
		<br> Ticket Description: <input type="text"
			name="ticket_description"> <br>
		<br> <input type="submit" value="Create">
	</form>
<%@include file="common/footer.jsp" %>