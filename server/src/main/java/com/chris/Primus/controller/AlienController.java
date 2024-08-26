package com.chris.Primus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chris.Primus.model.Alien;
import com.chris.Primus.service.AlienService;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("/primus/")
public class AlienController {

	@Autowired
	private AlienService alienServ;
	
	@GetMapping("/allAliens") 
		public List<Alien> getAllAliens(){
			return alienServ.getAllAliens();
		}
	
	@PostMapping("/addAlien")
	public String newAlien(@RequestBody Alien a) {
		alienServ.addAlien(a);
		return "New alien DNA aquired";
	}
	
	@DeleteMapping("/delAlien/{id}")
	public String deleteAlien(@PathVariable int id) {
		alienServ.deleteAlien(id);
		return "Alien DNA succesfully removed";
	}
	
	@PutMapping("/updAlien/{id}")
	public String updateAlien(@PathVariable int id, @RequestBody Alien alien) {
		alienServ.updAlien(id, alien);
		return "Alien DNA updated";
	}
	
}
