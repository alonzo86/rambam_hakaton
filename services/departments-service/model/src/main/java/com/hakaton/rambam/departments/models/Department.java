package com.hakaton.rambam.departments.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Department {
    @Id
	@GeneratedValue
    private long id;
    private String name;
    private int currentAdmissions;
}
