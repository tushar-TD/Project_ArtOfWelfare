package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.repository.VerifyngoRepository;

@Service
public class VerifyngoService {

	@Autowired
	VerifyngoRepository vrepo;
	
	public Ngo getngo(Login role_id)
	{
		return vrepo.getngo(role_id);
	}
	
}
