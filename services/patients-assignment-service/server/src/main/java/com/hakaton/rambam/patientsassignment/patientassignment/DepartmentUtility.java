package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.BedTypeEnum;
import com.hakaton.rambam.patients.models.Patient;

import java.util.ArrayList;
import java.util.List;

public class DepartmentUtility {

    static private double last24HoursWeight = 1;
    static private double waitingListSizeWeight = 1;
    static private double occupancyPercentageWeight = 1;

    Department getBestDepartment(List<Department> departmentList, List<Patient> waitingList, Patient patient) {
        double minScore = Double.MAX_VALUE;
        Department bestDepartment = null;

        BedTypeEnum bedType = decideBedType(patient);
        List<Department> availableDepartments = new ArrayList<>();
        // for normalization
        long maxWaitingListSize = 0;
        int maxLast24Hours = 0;
        double maxOccupencyPercentage = 0;
        for (Department department : departmentList) {
            int std = getStandard(department, bedType);
            if (std == 0) continue;
            availableDepartments.add(department); // filter out departments with no available beds of required type

            maxLast24Hours = Math.max(maxLast24Hours, getLast24Hours(department));
            maxOccupencyPercentage = Math.max(maxOccupencyPercentage, getOccupied(department, bedType) / getStandard(department, bedType));

            maxWaitingListSize = Math.max(maxWaitingListSize, waitingList.stream()
                    .filter(p -> department.getName().equals(p.getDepartment())
                            || (p.getDepartment() == null && department.getName().equals(p.getAssigndDepartment())))
                    .count());
        }

        // calculate department score
        for (Department department : availableDepartments) {
            double normalizedOccupancyPercentage = getOccupied(department, bedType) * maxOccupencyPercentage / getStandard(department, bedType);
            double normalizedLast24Hours = getLast24Hours(department) / maxLast24Hours;
            //get number of patients waiting for the same bed in current department
            long waitingListSize = maxWaitingListSize==0?0: waitingList.stream()
                    .filter(p -> department.getName().equals(p.getDepartment())
                            || (p.getDepartment() == null && department.getName().equals(p.getAssigndDepartment())))
                    .count();
            double normalizedWaitingListSize = waitingListSize / maxWaitingListSize;

            double score = normalizedLast24Hours * last24HoursWeight
                    + normalizedOccupancyPercentage * occupancyPercentageWeight
                    + normalizedWaitingListSize * waitingListSizeWeight;
            if (minScore > score) {
                bestDepartment = department;
                minScore = score;
            }
        }

        return bestDepartment;
    }

    private int getLast24Hours(Department department) {
        return department.getHallwayAcceptedLast24Hours() +
                department.getRegularAcceptedLast24Hours() +
                department.getEmergencyAcceptedLast24Hours();
    }

    private BedTypeEnum decideBedType(Patient patient) {
        if (patient.isGivenArtificialRespiration() /*todo add isIntensiveCare*/) {
            return BedTypeEnum.INTENSIVE_CARE;
        }

        if (patient.isMedicalComplexityMonitor() || patient.isMedicalComplexityOxygen() ||
                patient.isIsolationResistant() || patient.isNeutropeticPatient()) {
            return BedTypeEnum.WARD;
        }

        return BedTypeEnum.GENERAL;
    }

    //filter by bed type
    private int getStandard(Department department, BedTypeEnum bedType) {
        switch (bedType) {
            case INTENSIVE_CARE:
                return department.getEmergencyBedCount();
            case WARD:
                return department.getRegularBedCount();
            case GENERAL:
                return department.getHallwayBedCount();
        }
        return department.getTotalBedCount();
    }

    //filter by bed type
    private int getOccupied(Department department, BedTypeEnum bedType) {
        switch (bedType) {
            case INTENSIVE_CARE:
                return department.getEmergencyOccupiedBedCount() + department.getEmergencyCancelledTypeA() + department.getEmergencyCancelledTypeB()
                        + department.getEmergencyCancelledTypeC() + department.getEmergencyCancelledTypeD() + department.getEmergencyCancelledTypeE();
            case WARD:
                return department.getRegularOccupiedBedCount() + department.getRegularCancelledTypeA() + department.getRegularCancelledTypeB()
                        + department.getRegularCancelledTypeC() + department.getRegularCancelledTypeD() + department.getRegularCancelledTypeE();
            case GENERAL:
                return department.getRegularOccupiedBedCount() + department.getHallwayOccupiedBedCount()
                        + department.getRegularCancelledTypeA() + department.getRegularCancelledTypeB()
                        + department.getRegularCancelledTypeC() + department.getRegularCancelledTypeD()
                        + department.getRegularCancelledTypeE();
        }
        return 0;
    }


}
