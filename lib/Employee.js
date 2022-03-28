class Employee {
    constructor(employeeName, email) {

        this.employeeName = employeeName;
        this.email = email;
    }

    // This will get the employees name
    getName() {
        return this.name;
    }

    //this will get the employees email
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;