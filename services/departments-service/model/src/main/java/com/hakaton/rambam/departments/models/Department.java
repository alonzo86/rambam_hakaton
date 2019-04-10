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
    private int totalBedCount;
    private int emergencyBedCount;
    private int isolationRoomsCount;
    private int hallwayBedCount;
    private int currentPatientCount;
    private int emergencyPatientCount;
    private int respirationPatientCount;
    private int nursingPatientCount;
    private int independentPatientCount;
    private int oxygenSupportPatientCount;
    private int monitoredPatientCount;
    private int isolationPatientCount;
    private String isolationType;
    private int canceledBedType;
    private int neutrophillPatientCount;
    private int actualHallwayPatientCount;
    private int patientAcceptedLast24Hours;
}
