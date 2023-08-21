package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Question;
import com.example.demo.repository.ForgotpwdRepository;

@Service
public class ForgotPwdService {
	
	@Autowired
	ForgotpwdRepository frepo;
	
	public String getQuestionText(String email)
	{
		String q;
		System.out.println(email);
		Optional<String> ol = frepo.getQueTextByEmail(email);
		try
		{
			q=ol.get();
		}
		catch(Exception e)
		{
			q=null;
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return q;
	}
}
