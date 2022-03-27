class Employee {
    constructor(employeeName, employeeEmail) {

        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
    }

    // This will get the employees name
    getName() {
        return this.name;
    }

    //this will get the employees email
    getEmail() {
        return this.employeeEmail;
    }
}

module.exports = Employee;