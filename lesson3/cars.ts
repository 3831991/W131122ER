import { Person } from "./persons";

export interface Car {
    id: number;
    manufacture: string;
    name: string;
    model: number;
    color: string;
    topSpeed: number;
    km: number;
    horsePower: number;
    seats: number;
    convertible: boolean;
    testMonth: number;
    warranty: number;
    hybrid: boolean;
    price: number;
    driver: Driver;
}

export interface Driver extends Person {
    licenseDate: string;
    onlyAuto: boolean;
    licenseType: LicenseType[];
}

export type LicenseType = 'A2' | 'A1' | 'A' | 'B' | 'C1' | 'C' | 'D' | 'D1' | 'D2' | 'D3' | 'E' | '1';

const car: Car = {
    id: 0,
    manufacture: "Mazda",
    name: "CX-30",
    model: 2023,
    color: "Black",
    topSpeed: 180,
    km: 1000,
    horsePower: 115,
    seats: 5,
    convertible: false,
    testMonth: 2,
    warranty: 3,
    hybrid: true,
    price: 180000,
    driver: {
        licenseDate: "2000-01-01",
        onlyAuto: false,
        licenseType: ['A2', 'A1', 'A', 'B'],
        id: 0,
        firstName: "Itshak",
        lastName: "Tewelde",
        birthday: "1990-05-06",
        phone: "08-9658659",
        email: "chul@gmail.com",
        city: "",
        address: ""
    }
}