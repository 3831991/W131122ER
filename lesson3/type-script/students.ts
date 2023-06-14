import { Person } from "./persons";

export interface Student extends Person {
    grades: number[];
    startDate: string;
    endDate?: string;
    certified: boolean;
}

const student1: Student = {
    firstName: "Nadav",
    lastName: "Zohar",
    birthday: "1999-04-08",
    startDate: "2022-01-01",
    grades: [100, 100, 100, 100, 97, 93, 100, 42],
    certified: false,
    id: 1,
    phone: "050-050-0505",
    email: "nadav@gmail.com",
    city: "Ramalla",
    address: "Ofakim",
};

const students: Student[] = [
    {
        id: 2,
        firstName: "Tomer",
        lastName: "Nashrubi",
        birthday: "1998-03-18",
        startDate: "2022-01-01",
        grades: [100, 100, 100, 100, 97, 93, 100],
        certified: false,
        phone: "123-456-7894",
        email: "abc@abc",
        city: "",
        address: ""
    },
    student1,
]