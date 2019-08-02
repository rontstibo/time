package com.timelog.dao;

public class viewDB {

	public static void main(String[] args) throws Exception{
		DatabaseConnection db= new DatabaseConnection();
		db.connectToDatabase();
		db.readDatabases();
	}

}
