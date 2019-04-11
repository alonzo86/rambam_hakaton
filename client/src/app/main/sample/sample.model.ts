export interface IUnitCapacity {
    normal: number;
    isolation: number;
    unit: number;
    corridor: number;
}

export interface IPatientStatus {
    id: string;
    name: string;
    department: string;
    assignment: string;
    gender: string;
    returningPatient: boolean;
    previousReleasingDepartment: string;
    totalTimeInMelrad: number;
    waitingTime: number;
    givenArtificialRespiration: boolean;
    nursingComplexityIndependentPatient: boolean;
    nursingComplexityNursedPatient: boolean;
    medicalComplexityMonitor: boolean;
    medicalComplexityOxygen: boolean;
    isolationResistant: boolean;
    isolationType: string;
    neutropeticPatient: boolean;
    selected: boolean;
}

export interface IDepartmentStatus {
    id: number;
    name: string;
    hallwayFreeBedCount: number;
    hallwayOccupiedBedCount: number;
    hallwayAcceptedLast24Hours: number;
    singleFreeBedCount: number;
    singleOccupiedBedCount: number;
    singleAcceptedLast24Hours: number;
    emergencyBedCount: number;
    emergencyFreeBedCount: number;
    emergencyOccupiedBedCount: number;
    emergencyAcceptedLast24Hours: number;
    emergencyCancelledTypeA: number;
    emergencyCancelledTypeB: number;
    emergencyCancelledTypeC: number;
    emergencyCancelledTypeD: number;
    emergencyCancelledTypeE: number;
    regularFreeBedCount: number;
    regularOccupiedBedCount: number;
    regularAcceptedLast24Hours: number;
    regularCancelledTypeA: number;
    regularCancelledTypeB: number;
    regularCancelledTypeC: number;
    regularCancelledTypeD: number;
    regularCancelledTypeE: number;
    totalBedCount: number;
}

export interface IUnitStatus {
    unitid: string;
    name: string;
    capacity: IUnitCapacity;
    patients: IPatientStatus[];
}

export interface IUnitSummary {
    totalFemale: number;
    totalMale: number;
    totalBedNormal: number;
    totalBedUnit: number;
    totalBedIsolation: number;
    totalBedCorridor: number;
    totalAsissted: number;
    totalIntubated: number;
    totalMedicalMonitor: number;
    totalMedicalOxygen: number;
    avgAge: number;
}
