package com.hakaton.rambam.departments.department;

import org.springframework.stereotype.Repository;

import com.hakaton.rambam.common.interfaces.GenericCrudRepository;
import com.hakaton.rambam.departments.models.Department;

@Repository
public interface DepartmentRepository extends GenericCrudRepository<Department> {
	
}
