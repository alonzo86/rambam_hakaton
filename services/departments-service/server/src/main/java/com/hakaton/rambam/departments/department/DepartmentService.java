package com.hakaton.rambam.departments.department;

import com.hakaton.rambam.common.services.GenericResourceService;
import com.hakaton.rambam.departments.models.Department;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService extends GenericResourceService<Department, DepartmentRepository> {

  public DepartmentService(DepartmentRepository repository) {
		super(repository);
	}
}
