package com.example.service;

import java.util.List;

import com.example.classes.Customer;
import com.example.classes.Loan;
import com.example.exception.CustomerNotFoundException;

public interface CustomerService {
	

	Customer login(String emailId, String password) throws CustomerNotFoundException;
			
	Customer register(Customer customer);
	
	String seeLoanStatus(int customerId);
	
	List<Loan> viewLoan();
	
	String applyForLoan(int customerId);

    Customer getCustomer(String emailId);

}
