import { Person } from "./persons";

export interface Teacher extends Person {
    salary: number;
    startDate: string;
    modules: Modules[];
}

export type Modules = 'HTML' | 'CSS' | 'SCSS' | 'Bottstrap' | 'JavaScript' | 'TypeScript' | 'React' | 'NodeJS' | 'MySQL' | 'MongoDB' | 'REST API';

const teacher1: Teacher = {
    id: 1,
    firstName: 'Noa',
    lastName: 'Tuson',
    birthday: '1999-02-20',
    phone: '123-456-7890',
    email: 'envkt@example.com',
    city: 'פתח תקווה',
    address: 'rjuc jkumh sus',
    salary: 27000,
    startDate: '2020-01-01',
    modules: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
}

const person: Person = {
    id: 2,
    firstName: 'Ilan',
    lastName: 'Maxim',
    birthday: '1980-01-01',
    phone: '123-456-7890',
    email: 'envkt@example.com',
    city: 'New York',
    address: '123 Main Street',
}

const teacher2: Teacher = {
    ...person,
    address: 'lo yodea',
    salary: 30000,
    startDate: '2020-01-01',
    modules: ["JavaScript", "TypeScript", "React", "NodeJS", "MySQL"],
}