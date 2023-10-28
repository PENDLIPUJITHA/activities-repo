package com.example.service;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.DialectOverride.OverridesAnnotation;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.classes.Customer;
import com.example.classes.Loan;
import com.example.classes.LoanApplication;
import com.example.dao.CustomerDao;
import com.example.dao.LoanDao;
import com.example.exception.CustomerNotFoundException;

public class CustomerServiceImpl implements CustomerService {
	@Autowired
    private CustomerDao customerDao;
	
	
	@Autowired
	private LoanDao loanDao;
	
	@Autowired
	LoanApplication loan;
	
	@Override
	public Customer login(String emailId, String password) throws CustomerNotFoundException {
		Customer customer = customerDao.getCustomer(emailId);
		if(customer.getPassword().equals(password)) {
			return customer;
		}
		throw new CustomerNotFoundException("Profile not found with an email-id "+emailId);
	}

	@Override
	public Customer register(Customer customer) {
		Customer registeredCustomer=customerDao.save(customer);
		return registeredCustomer;
	}

	@Override
	public String seeLoanStatus(int customerId) {
		String st=loan.getStatus();
		return st;
		
	}


	@Override
	public List<Loan> viewLoan() {
		List<Loan> loans=loanDao.findAll();
 		return loans;
	}


	@Override
	public Customer getCustomer(String emailId) {
		Customer c=customerDao.getCustomer(emailId);
		return c;
	}

	@Override
	public String applyForLoan(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}
}

    
