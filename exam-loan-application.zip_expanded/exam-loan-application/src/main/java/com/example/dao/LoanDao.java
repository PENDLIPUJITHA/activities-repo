package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.classes.Customer;
import com.example.classes.Loan;

public interface LoanDao extends JpaRepository<Loan, Integer>{
	@Query("select c from  Customer c where c.emailId = ?1")
	public Customer getCustomer(String emailId);

}
