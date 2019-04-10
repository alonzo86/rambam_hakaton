package com.hakaton.rambam.departments.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Department {
    @Id
    private long id;
    private String name;
    private int hallwayFreeBedCount;
    private int hallwayOccupiedBedCount;
    private int hallwayAcceptedLast24Hours;
    private int singleFreeBedCount;
    private int singleOccupiedBedCount;
    private int singleAcceptedLast24Hours;
    private int emergencyFreeBedCount;
    private int emergencyOccupiedBedCount;
    private int emergencyAcceptedLast24Hours;
    private int emergencyCancelledTypeA;
    private int emergencyCancelledTypeB;
    private int emergencyCancelledTypeC;
    private int emergencyCancelledTypeD;
    private int emergencyCancelledTypeE;
    private int regularFreeBedCount;
    private int regularOccupiedBedCount;
    private int regularAcceptedLast24Hours;
    private int regularCancelledTypeA;
    private int regularCancelledTypeB;
    private int regularCancelledTypeC;
    private int regularCancelledTypeD;
    private int regularCancelledTypeE;
    private int totalBedCount;
}
