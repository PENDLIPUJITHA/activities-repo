package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.classes.Customer;
import com.example.classes.LoanApplication;

public interface LoanApplicationDao extends JpaRepository<LoanApplication, Integer>{
	@Query("select c from  Customer c where staus = ?1")
	public Customer setStatus(String emailId);
	

}
