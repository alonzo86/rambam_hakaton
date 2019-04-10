package com.hakaton.rambam.departments.department;

import java.util.List;

import com.hakaton.rambam.common.controllers.GenericScrudController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hakaton.rambam.departments.models.Department;

@RestController
public class DepartmentController extends GenericScrudController<Department, DepartmentService> {

    @Autowired
    DepartmentController(DepartmentService departmentService){
        super(departmentService);
    }

    @Override
    @RequestMapping(value = "/department", produces = { "application/json" }, consumes = { "application/json" }, method = RequestMethod.POST)
    public ResponseEntity<Department> create(@RequestBody Department department) {
        return super.create(department);
    }

    @Override
    @RequestMapping(value = "/department/{id}", produces = { "application/json" }, method = RequestMethod.DELETE)
    public ResponseEntity<Department> delete(@PathVariable("id") long id) {
        return super.delete(id);
    }

    @Override
    @RequestMapping(value = "/department/{id}", produces = { "application/json" }, method = RequestMethod.GET)
    public ResponseEntity<Department> read(@PathVariable("id") long id) {
        return super.read(id);
    }

    @Override
    @RequestMapping(value = "/department/{id}", produces = { "application/json" }, consumes = { "application/json" }, method = RequestMethod.PUT)
    public ResponseEntity<Department> update(@PathVariable("id") long id, @RequestBody Department department) {
        return super.update(id, department);
    }

    @Override
    @RequestMapping(value = "/department/search", produces = { "application/json" }, method = RequestMethod.POST)
    public ResponseEntity<List<Department>> search(@RequestBody Department searchCriteria) {
        return super.search(searchCriteria);
    }
}
