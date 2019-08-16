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

	$.ajax({
        url: "http://localhost:8080/Timelog/rest/Timelog/alltickets"
    }).then(function(data) {
    	ReactDOM.render(<Test data={data}/>,document.getElementById('testResult'));
       }
    );  
	$.ajax({
        url: "http://localhost:8080/Timelog/rest/Timelog/getCurrentUser"
    }).then(function(data) {
    	ReactDOM.render(<Setuser name={data}/>,document.getElementById('currentUser'));
       }
    );  	
function Setuser(props){
	return <h3>Hello, {props.name.name}!</h3>;
}  	

class Test extends React.Component{
	
	constructor(props){
		super(props);
		this.data = {jsondata: props.data};
	}
	render(){
		return (<table id="allTickets"><tbody>{this.data.jsondata.map((jsonObj, key)=><tr key={key}><td>{jsonObj.TicketId}</td><td>{jsonObj.TicketNo}</td><td>{jsonObj.TicketDesc}</td><td>{jsonObj.TicketStatus}</td></tr>)}</tbody></table>);
	}
}
