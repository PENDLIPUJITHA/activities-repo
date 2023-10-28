package com.example.service;

import java.util.List;

import com.example.classes.Loan;

public interface EmployeeService {
	//ViewLoanapplication()
	//update loan()
	//view credit Score()
	List<Loan> getLoanApplications();
	String updateLoanApplication(int applicationId);
	void viewCreditScore(String pan);

}
