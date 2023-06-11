interface Student {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    birthday?: string;
    city?: string;
    isActive: boolean;
    status: Statuses;
}

enum Statuses {
    initial,
    actived,
    graduated,
}

const item: Student = {
    id: 1,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    isActive: false,
    status: Statuses.actived,
}

const students: Student[] = [
    {
        id: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthday: "",
        city: "",
        isActive: false,
        status: Statuses.graduated,
    },
    {
        id: 2,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthday: "",
        city: "",
        isActive: false,
        status: Statuses.actived,
    },
];