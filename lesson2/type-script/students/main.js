var Statuses;
(function (Statuses) {
    Statuses[Statuses["initial"] = 0] = "initial";
    Statuses[Statuses["actived"] = 1] = "actived";
    Statuses[Statuses["graduated"] = 2] = "graduated";
})(Statuses || (Statuses = {}));
var item = {
    id: 1,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    isActive: false,
    status: Statuses.actived,
};
var students = [
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
