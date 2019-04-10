package com.hakaton.rambam.common.services;

import com.hakaton.rambam.common.interfaces.GenericCrudRepository;
import com.hakaton.rambam.common.interfaces.GenericService;

import java.util.List;

import org.springframework.data.domain.Example;

public abstract class GenericResourceService<T, R extends GenericCrudRepository<T>>
        implements GenericService<T>{

    protected final GenericCrudRepository<T> repository;

    public GenericResourceService(GenericCrudRepository<T> repository) {
        this.repository = repository;
    }
    
	@Override
	public T create(T resource) {
		return repository.save(resource);
	}

	@Override
	public T delete(long id) {
		T deletedResource = read(id);
		repository.delete(id);
		return deletedResource;
	}

	@Override
	public T read(long id) {
		return repository.findOne(id);
	}

	@Override
	public T update(T resource) {
		return repository.save(resource);
	}

	@Override
	public List<T> search(T searchExample) {
		return (List<T>) repository.findAll(); //TODO : implement
	}

	@Override
	public List<T> all() {
		return (List<T>) repository.findAll(); //TODO : implement
	}
}
