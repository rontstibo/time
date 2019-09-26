//function getAllTicketDeatils(){
//	$.ajax({
//        url: "http://localhost:8080/Timelog/rest/Timelog/alltickets"
//    }).then(function(data) {
//      var displayTickets="<div><table border='1px'><tr><td>TicketID</td><td>TicketNo</td><td>TicketDesc</td><td>TicketStatus</td></tr>";
//       for(i in data){
//    	  displayTickets+="<tr><td>"+data[i].TicketId+"</td><td>"+data[i].TicketNo+"</td><td>"+data[i].TicketDesc+"</td><td>"+data[i].TicketStatus+"</td></tr>";
//       }
//       displayTickets+="</table></div>";
//       return dispayTickets;
//       }
//    
//    );  
//}
//class DisplayAllTicketsDetails extends React.Component{
//	render(){
//		return (getAllTicketDeatils());		
//	}
//}
//ReactDOM.render(<DisplayAllTicketsDetails />,document.getElementById('testResult'));

var tickets={};
	var alltickets=[];		
$(document).ready(function(){
	$.ajax({
        url: "http://localhost:8080/Timelog/rest/Timelog/alltickets"
    }).then(function(data) {
    	showUser();
    	ReactDOM.render(<Test data={data}/>,document.getElementById('testResult'));
    	ReactDOM.render(<CreateTicket />,document.getElementById('createTicketContainer'));
    	 $("#createTicketSubmit").click(function(){
 		    insertTicket();
 		    clearFields();
 		  });
    	 $("#TicketNo").change(function(){
 	    	var ticketNo=$("#TicketNo").val();
 	    	console.log("ticket no changed : "+ticketNo);
 	    	console.log("in alltickets : "+alltickets.indexOf(ticketNo));
 	    	if(alltickets.indexOf(ticketNo)!=-1){
 	    		$("#ticketExists").text("Ticket number exists");
 	    		$("#createTicketSubmit").prop('disabled', true);
 	    	}else{
 	    		$("#ticketExists").text("");
 	    		$("#createTicketSubmit").prop('disabled', false);
 	    	}
     });
	});  
    	
    function showUser(){
    	var username=getCurrentUser();
        ReactDOM.render(<Setuser name={username}/>,document.getElementById('currentUser'));
    }	   
    function getCurrentUser(){
    	var userDetails=localStorage.getItem('user');
    	var username=userDetails.substring(1,userDetails.indexOf(":"));
    	return username;
    }
    function insertTicket(){
    	console.log("insert function");
    	var currentUser=$("#currentUser").text();
    	var ticketNo=$("#TicketNo").val();
    	var TicketDesc=$("#TicketDesc").val();
    	console.log(currentUser);
    	console.log(ticketNo);
    	console.log(TicketDesc);
    	$.post("http://localhost:8080/Timelog/rest/Timelog/insertNewTicket",
	    {
    		currentUser: currentUser,
    		TicketNo: ticketNo,
    		TicketDesc:TicketDesc
	    },
	    function(data1,status){
	      console.log("Data: " + data1 + "\nStatus: " + status); 
	      $.ajax({
	          url: "http://localhost:8080/Timelog/rest/Timelog/alltickets"
	      }).then(function(data) {
	      	ReactDOM.render(<Test data={data}/>,document.getElementById('testResult'));
	  		}); 
	    });	
    }
    function clearFields(){
    	console.log("clearfields");
    	$("#TicketNo").val("");
    	$("#TicketDesc").val("");
    }
   
});	
function Setuser(props){
	console.log("props.name.: "+props.name);
	return <p>{props.name}</p>;
}  	
function setTickets(recivedTickets){
	console.log("recivedTickets: "+recivedTickets);
	console.log("tickets : "+tickets);
	tickets=recivedTickets;
	for(var i in tickets){
		alltickets.push(tickets[i].TicketNo);
	}
	console.log("alltickets : "+alltickets);
}
function checkTickets(){
	var ticketNo=$("#TicketNo").text();
	console.log("ticketNo : "+ticketNo);
}
class Test extends React.Component{
	constructor(props){
		super(props);
		this.data = {jsondata: props.data};
		console.log("props.data"+props.data);
		setTickets(props.data);
	}
	componentWillUpdate (newdata) {
		console.log('setting state');
		console.log(newdata.data[0].TicketNo);
		this.data={jsondata:newdata.data};
		setTickets(props.data);
    }
	render(){
		console.log("test render function");
		return (<table id="allTickets"><tbody>{this.data.jsondata.map((jsonObj, key)=><tr key={key}><td>{jsonObj.TicketNo}</td><td>{jsonObj.TicketDesc}</td><td>{jsonObj.TicketStatus}</td></tr>)}</tbody></table>);
	}
}

class CreateTicket extends React.Component{	
	render(){
		return (<div id="createTickets" class="form-group">
		<button type="button" class="btn btn-text"><h1>Create Ticket</h1></button>
		
			<div class="form-group ">
		        <input type="text" class="form-control col-sm-6" id="TicketNo" placeholder="Ticket number" name="TicketNo"/>
		    </div>
		        <p id="ticketExists"></p>	
		    <div class="form-group">
		        <input type="text" class="form-control col-sm-11" id="TicketDesc" placeholder="Ticket description" name="TicketDesc" />
		    </div>
			<div class="form-group">     
				<div class="col-sm-offset-2 col-sm-10">   
			        <button id="createTicketSubmit" class="btn btn-primary">Submit</button>
			    </div>
		     </div>
		 
		</div>);
	}
}


