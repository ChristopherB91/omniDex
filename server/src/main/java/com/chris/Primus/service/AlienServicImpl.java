package com.chris.Primus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chris.Primus.exception.ResourceNotFoundException;
import com.chris.Primus.model.Alien;
import com.chris.Primus.repository.AlienRepository;

@Service
public class AlienServicImpl implements AlienService{
	
	
	@Autowired
	private AlienRepository alienRepo;

	@Override
	public List<Alien> getAllAliens() {
		return alienRepo.findAll();
	}

	@Override
	public Alien addAlien(Alien a) {
		return alienRepo.save(a);
	}

	@Override
	public void deleteAlien(int id) {
		alienRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Alien DNA not found"));
		alienRepo.deleteById(id);
	}
	
	@Override
	public void updAlien(int id, Alien alien) {
		Alien a = alienRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Alien DNA not found"));
		a.setName(alien.getName());
		a.setNickname(alien.getNickname());
		a.setImage(alien.getImage());
		a.setSilhouette(alien.getSilhouette());
		a.setAbilities(alien.getAbilities());
		a.setUltimate(alien.getUltimate());
		alienRepo.save(a);
	}
}
