package com.timelog.dao;

import java.sql.ResultSet;
import java.util.*;

import org.json.simple.*;
import org.json.simple.parser.*;

import javax.json.Json;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path; 
import javax.ws.rs.Produces; 
import javax.ws.rs.core.MediaType;  
@Path("/Timelog") 
public class controller {
	public DatabaseConnection db;
	public controller() {
		db= new DatabaseConnection();
	}
	@GET 
   	@Path("/alltickets") 
	@Produces(MediaType.APPLICATION_JSON) 
	public List GetAllTicketDetails() throws Exception{
		db.connectToDatabase();
		ResultSet result=db.readDatabases();
		return GetTicketDetailsJSON(result);
	}

	public List GetTicketDetailsJSON(ResultSet result) {
		//JSONObject list=new JSONObject();
		List<JSONObject> al=new ArrayList<JSONObject>();  
		try {
			int i=0;
			while(result.next()){
				JSONObject json = new JSONObject();
				json.put("TicketId",result.getInt(1));
				json.put("TicketNo",result.getString(2));
				json.put("TicketDesc",result.getString(3));
				json.put("TicketStatus",result.getString(4));
				al.add(json);
				System.out.println(result.getInt(1)+" "+result.getString(2)+" "+result.getString(3)+" "+result.getString(4));
				//list.put(i,al);i++;
			}
		}catch(Exception e) {
			
		}
		return al;
	}
	
	@GET 
   	@Path("/getCurrentUser") 
	@Produces(MediaType.APPLICATION_JSON) 
	public JSONObject getUser() {
		JSONObject userName=new JSONObject();
		userName.put("name",System.getProperty("user.name"));
		return userName;
	}
	
	@POST
	@Path("/insertNewTicket")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public void insertNewTicket(@FormParam("currentUser") String user,@FormParam("TicketNo") String ticketNo,@FormParam("TicketDesc") String TicketDesc) throws Exception {
		System.out.println("user:"+user+" no:"+ticketNo+" TicketDesc:"+TicketDesc);
		db.connectToDatabase();
		db.insertNewTickets(ticketNo, TicketDesc);
	}
	
}


