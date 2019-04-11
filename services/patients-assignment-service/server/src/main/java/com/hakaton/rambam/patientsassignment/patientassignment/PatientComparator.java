package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.patients.models.Patient;

import java.util.Comparator;

public class PatientComparator implements Comparator<Patient> {

    @Override
    public int compare(Patient p1, Patient p2) {
        return calculateScore(p1) - calculateScore(p2);
    }

    private int calculateScore(Patient patient) {
        int score = 0;

        if (patient.isReturningPatient()) {
            score += Weights.returningPatientScore;
        }

        if (patient.getIsolationType().toLowerCase().equals("kpc") ||
                patient.getIsolationType().toLowerCase().equals("cd")) {
            score += Weights.kpcCdScore;
        }

        if (patient.isGivenArtificialRespiration()) {
            score += Weights.artificialRespirationScore;
        }

        if (patient.isNeutropeticPatient()) {
            score += Weights.neutropeticScore;
        }

        if (patient.getIsolationType() != null) {
            score += Weights.isolationScore;
        }
        float waitTime = patient.getWaitingTime();
        score += waitTime < 12 ? waitTime * Weights.standardWaitScore : waitTime * Weights.extendedWaitScore;

        return score;
    }
}
