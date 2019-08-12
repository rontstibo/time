package com.timelog.dao;

import java.sql.ResultSet;
import org.json.simple.*;
import org.json.simple.parser.*;

public class controller {

	public String GetAllTicketDetails() throws Exception{
		DatabaseConnection db= new DatabaseConnection();
		db.connectToDatabase();
		ResultSet result=db.readDatabases();
		return GetTicketDetailsJSON(result);
	}

	public String GetTicketDetailsJSON(ResultSet result) {
		JSONObject json = new JSONObject();
		try {
			while(result.next()){
				json.put("TicketId",result.getInt(1));
				json.put("TicketNo",result.getString(2));
				json.put("TicketDesc",result.getString(3));
				json.put("TicketStatus",result.getString(4));
			}
		}catch(Exception e) {
			
		}
		return json.toString();
	}
	
	public void test() {
		
	}
}


