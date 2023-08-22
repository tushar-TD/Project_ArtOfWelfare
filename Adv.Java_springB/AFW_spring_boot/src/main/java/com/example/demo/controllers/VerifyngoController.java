package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.service.VerifyngoService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class VerifyngoController {
	
	@Autowired
	VerifyngoService vservice;
	
	@GetMapping("/getNgo")
	public Ngo getNgo(@RequestParam("role_id") int role_id)
	{
		Login l=vservice.getngo(role_id);
		
		return vservice.getngo(l);
		
	}

}
