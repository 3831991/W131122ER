import { Person } from "./persons";

export interface Player extends Person {
    height: number;
    level: Levels;
    clicksPerMinuts: number;
    displayName: string;
}

export enum Levels {
    beginner,
    intermediate,
    advanced,
    expert,
    master,
    premium,
}

const player1: Player = {
    id: 999,
    firstName: "Maxim",
    lastName: "Kovalski",
    level: Levels.premium,
    height: 181,
    clicksPerMinuts: 66,
    birthday: "1991-03-28",
    displayName: "מקסים",
    phone: "050-050-3695",
    email: "Math@random.sum",
    city: "first to tzion",
    address: "",
}