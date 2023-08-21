package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.LoginCheck;
import com.example.demo.service.ForgotPwdService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ForgotPwdController {
	
	@Autowired
	ForgotPwdService fservice;
	
	@PostMapping("/checkemail")
	public String checkemail(@RequestParam String email)
	{
		return fservice.getQuestionText(email);
	}

}
