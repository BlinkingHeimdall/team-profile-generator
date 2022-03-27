const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(managerOffice, managerID) {
        super();
    this.managerOffice = managerOffice;
    this.managerID = managerID;
    }

    // this will get the manager's office number
    officeNumber() {
        return this.managerOffice
    }

    // this will define the managers role
    role() {
        return Manager;
    }

    // this will get the managers employee/manager ID number
    getId() {
        return this.managerID;
    }
}


module.exports = Manager;