package com.chris.Primus.service;

import java.util.List;

import com.chris.Primus.model.Alien;

public interface AlienService {

	public List<Alien> getAllAliens();

	public Alien addAlien(Alien a);

	public void deleteAlien(int id);

	public void updAlien(int id, Alien alien);
	
}
