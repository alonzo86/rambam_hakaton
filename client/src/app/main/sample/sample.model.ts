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
