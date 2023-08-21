package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Question;

@Repository
public interface QuestionRepo extends JpaRepository<Question,Integer> {

}
