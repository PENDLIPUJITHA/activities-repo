package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.classes.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {
	

}
