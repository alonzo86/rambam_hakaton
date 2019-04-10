package com.hakaton.rambam.common.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.hakaton.rambam.common.interfaces.GenericCrudRepository;
import com.hakaton.rambam.common.interfaces.ScrudController;
import com.hakaton.rambam.common.services.GenericResourceService;

import java.util.List;


public class GenericScrudController<T,
        ResourceService extends GenericResourceService<T, ? extends GenericCrudRepository<T>>> implements ScrudController<T> {

    protected final ResourceService service;

    public GenericScrudController(ResourceService service) {
        this.service = service;
    }

    public ResponseEntity<List<T>> all() {
        List<T> resources = service.all();
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    public ResponseEntity<List<T>> search(@RequestBody T searchCriteria) {
        List<T> resources = service.search(searchCriteria);
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    public ResponseEntity<T> create(@RequestBody T resource) {
        T createdResource = service.create(resource);
        return ResponseEntity.ok(createdResource);
    }

    public ResponseEntity<T> read(@PathVariable("id") long id) {
        return ResponseEntity.ok(service.read(id));
    }

    public ResponseEntity<T> update(@PathVariable("id") long id, @RequestBody T resource) {
        T updatedResource = service.update(resource);
        return ResponseEntity.ok(updatedResource);
    }

    public ResponseEntity<T> delete(@PathVariable("id") long id) {
        T deletedResource = service.delete(id);
        return ResponseEntity.ok(deletedResource);
    }
}
