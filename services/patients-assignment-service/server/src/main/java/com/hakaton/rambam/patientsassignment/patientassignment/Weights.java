package com.hakaton.rambam.patientsassignment.patientassignment;

public class Weights {
    public static int returningPatientScore = 10;
    public static final int kpcCdScore   = 1;

    // department weights
    public static double last24HoursWeight = 1;
    public static double occupancyPercentageWeight = 1;
    public static double waitingListSizeWeight = 1;

    public static int artificialRespirationScore = 5;
    public static int neutropeticScore = 5;
    public static int isolationScore = 5;
    public static int standardWaitScore=1;
    public static int extendedWaitScore=3;
}