package com.hakaton.rambam.common.interfaces;

import org.springframework.data.repository.CrudRepository;

public interface GenericCrudRepository<T> extends CrudRepository<T, Long> {

}
