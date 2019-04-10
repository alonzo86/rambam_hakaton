package com.hakaton.rambam.common.interfaces;

import java.util.List;

public interface GenericService<T> {
    T create(T resource);
    T delete(long id);
    T read(long id);
    T update(T resource);
    List<T> search(T searchExample);
    List<T> all();
}
