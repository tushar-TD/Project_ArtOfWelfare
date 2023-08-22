package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;



@Repository
public interface VerifyngoRepository extends JpaRepository<Login, Integer> {

	@Query("select n from Login n where role_id=:4 and n.approve=:0")
	public Ngo getngo(Login user_id);
}
