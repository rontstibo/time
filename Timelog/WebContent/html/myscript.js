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

		
$(document).ready(function(){
	$.ajax({
        url: "http://localhost:8080/Timelog/rest/Timelog/alltickets"
    }).then(function(data) {
    	ReactDOM.render(<Test data={data}/>,document.getElementById('testResult'));
    	ReactDOM.render(<CreateTicket />,document.getElementById('createTicketContainer'));
    	 $("#createTicketSubmit").click(function(){
 		    insertTicket();
 		  });
	});  
	$.ajax({
        url: "http://localhost:8080/Timelog/rest/Timelog/getCurrentUser"
    }).then(function(data) {
    	ReactDOM.render(<Setuser name={data}/>,document.getElementById('currentUser'));
       }
    );  
	 
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
});	
function Setuser(props){
	return <h3>{props.name.name}</h3>;
}  	

class Test extends React.Component{
	
	constructor(props){
		super(props);
		this.data = {jsondata: props.data};
	}
	componentDidMount(newdata) {
        this.setState(() => {
            console.log('setting state');
            return { jsondata:newdata }
        });
    }
	render(){
		return (<table id="allTickets"><tbody>{this.data.jsondata.map((jsonObj, key)=><tr key={key}><td>{jsonObj.TicketId}</td><td>{jsonObj.TicketNo}</td><td>{jsonObj.TicketDesc}</td><td>{jsonObj.TicketStatus}</td></tr>)}</tbody></table>);
	}
}

class CreateTicket extends React.Component{
	render(){
		return (<div id="createTickets" class="form-group">
		<button type="button" class="btn btn-text"><h1>Create Ticket</h1></button>
		
			<div class="form-group ">
		        <input type="text" class="form-control col-sm-6" id="TicketNo" placeholder="Ticket number" name="TicketNo" />
		    </div>
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