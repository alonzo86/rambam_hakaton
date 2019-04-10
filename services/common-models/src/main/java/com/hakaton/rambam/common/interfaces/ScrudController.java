package com.hakaton.rambam.common.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ScrudController<T> {
    ResponseEntity<T> create(@RequestBody T resource);
    ResponseEntity<List<T>> search(@RequestBody T searchRequest);
    ResponseEntity<T> read(@PathVariable("id") long id) ;
    ResponseEntity<T> update(@PathVariable("id") long id, @RequestBody T resource);
    ResponseEntity<T> delete(@PathVariable("id") long id) ;
}
