package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.BedTypeEnum;
import com.hakaton.rambam.patients.models.Patient;

import java.util.List;
import java.util.stream.Collectors;

public class DepartmentUtility{

    Department GetBestDepartment(List<Department> departmentList, List<Patient> waitingList,Patient patient)
    {
        long maxScore=0;
        int maxStandard = 15;//hrdcoded todo actualy get it
        Department bestDepartment = null;
        BedTypeEnum TargetBedType=patient.getBedType();
        for(Department department : departmentList)
        {
            int occupied  = GetOccupied(department,TargetBedType);
            int standard = GetStandard(department,TargetBedType);

            //get number of patients waiting for the same bed in current department
            long waitingListSize = waitingList.stream()
                    .filter(p -> p.getAssigndDepartment() == department.getName()
                            && p.getBedType() == TargetBedType )
                .count();
            long score = standard/(occupied + maxStandard);
            // ToDo: take size of waiting list and Department.patientAcceptedLast24Hours and add to score...

            if (maxScore < score){
                bestDepartment = department;
                maxScore = score;
            }
        }

        return bestDepartment;
    }

    //filter by bed type
    int GetStandard(Department department, BedTypeEnum bedType){
        return 0;
    }

    //filter by bed type
    int GetOccupied(Department department, BedTypeEnum bedType){
        return 0;
    }
}
