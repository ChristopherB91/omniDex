package com.chris.Primus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chris.Primus.model.Alien;

@Repository
public interface AlienRepository extends JpaRepository<Alien, Integer> {

}
