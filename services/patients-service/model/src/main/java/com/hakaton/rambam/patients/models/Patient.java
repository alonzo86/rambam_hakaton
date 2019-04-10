package com.hakaton.rambam.patients.models;

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
public class Patient {
    @Id
    private long id;
    private String department;
    private String gender;
    private boolean returningPatient;
    private String previousReleasingDepartment;
    private float totalTimeInMelrad;
    private float waitingTime;
    private boolean givenArtificialRespiration;
    private boolean nursingComplexityIndependentPatient;
    private boolean nursingComplexityNursedPatient;
    private boolean medicalComplexityMonitor;
    private boolean medicalComplexityOxygen;
    private boolean isolationResistant;
    private String isolationType;
    private boolean neutropeticPatient;
}
