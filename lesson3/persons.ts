export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    phone: string;
    email: string;
    city: string;
    address: string;
}

// אובייקט מסוג Person
const person1: Person = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthday: '1990-01-01',
    phone: '123-456-7890',
    email: 'envkt@example.com',
    city: 'New York',
    address: '123 Main Street',
}

// אובייקט מסוג Person
const person2: Person = {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    birthday: '1990-01-01',
    phone: '123-456-7890',
    email: 'envkt@example.com',
    city: 'New York',
    address: '123 Main Street',
}

// מערך של Person
const persons: Person[] = [person1, person2];