package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.classes.CreditScore;
import com.example.classes.Customer;

public interface CreditScoreDao extends JpaRepository<CreditScore, Integer>{
	@Query("select c from  Customer c where c.pan= ?1")
	public Customer getScoreCredit(String emailId);

}
