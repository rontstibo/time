<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title><%=request.getParameter("title")%></title>
<script src="https://unpkg.com/react@16.7.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.development.js"></script>
<!-- <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script> -->
<!-- <script type="text/babel" src="html/common/react-bootstrap.min.js"></script>-->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My tickets</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Weekly summary</a>
      </li>
    </ul>
  </div>
  <ul class="nav navbar-nav navbar-right">
      <li class="nav-item active"><a class="nav-link" href="#"><div id="currentUser"></div></a></li>
      <li class="nav-item">
        <a class="nav-link" href="#">Logout</a>
      </li>
    </ul>
</nav>
<div id="app"></div>
	<script type="text/babel">
	class Header extends React.Component{
		
		render(){
			return(<div fixed="top" > </div>);
		}
	}
     ReactDOM.render(
        <Header />,
        document.getElementById("app")
     );
        </script>