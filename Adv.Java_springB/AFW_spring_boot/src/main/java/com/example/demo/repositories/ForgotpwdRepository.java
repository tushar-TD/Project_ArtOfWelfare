package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import com.example.demo.entities.*;


@Repository
public interface ForgotpwdRepository extends JpaRepository<ForgotPwd, Integer> {

	@Query(value="SELECT que_text FROM questions  WHERE que_id =(Select que_id from users where email = :email)", nativeQuery=true)
	Optional<String> getQueTextByEmail(String email);
}



