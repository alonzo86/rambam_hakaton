package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.patients.models.Patient;

import java.util.Comparator;

public class PatientComperator implements Comparator<Patient> {

    @Override
    public int compare(Patient p1, Patient p2) {
        return calculateScore(p1) - calculateScore(p2);
    }

    private int calculateScore(Patient patient) {
        int score = 0;

        if (patient.isReturningPatient()) {

        }

        return score;
    }
}
