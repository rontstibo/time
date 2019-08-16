
<jsp:include page='common/header.jsp'>
    <jsp:param name="title" value="Ticket Details screen"/>
</jsp:include>
<html>
<head>
<link rel="stylesheet" href="allTickets.css">
<script type = "text/javascript" src = "jquery-2.1.3.min.js"></script>
<script type="text/babel" src="myscript.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
</head>
<body>
<div id="container">
<div class="row">
<div class="col-sm-6">
	<div class="row">
		<div class="col-sm-12">
			<button type="button" class="btn btn-text"><h1>Ticket Details</h1></button>
		</div>
	<div class="row">
		<div class="col-sm-12">
		<div id="testResult" class="form-group"></div>
		</div>
	</div>
	</div>
</div>	
<div class="col-sm-6">	
<div id="createTickets" calss="form-group">
<button type="button" class="btn btn-text"><h1>Create Ticket</h1></button>
<form class="form-inline">
	<div class="form-group ">
        <input type="text" class="form-control col-sm-10" id="TicketNo" placeholder="Ticket number" name="TicketNo">
    </div>
    <div class="form-group">
        <input type="text" class="form-control col-sm-12" id="TicketDesc" placeholder="Ticket description" name="TicketDesc">
    </div>
	<div class="form-group">     
		<div class="col-sm-offset-2 col-sm-10">   
	        <button type="submit" class="btn btn-primary">Submit</button>
	    </div>
     </div>
 </form>   
</div>
</div>
</div>
</div>
<%@include file="common/footer.jsp" %>
</body>
</html>