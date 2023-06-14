import { Person } from "./persons";

export interface Car {
    // יש להשלים את החסר
    driver: Driver;
}

export interface Driver extends Person {
    // יש להשלים את החסר
    licenseType: LicenseType[];
}

export type LicenseType = '';