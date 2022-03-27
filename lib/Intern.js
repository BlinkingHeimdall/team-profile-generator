const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(school, internId) {
        super();
        this.internSchool = this.internSchool;
        this.internId = internId;
    }

    // This gets the intern's school
    school() {
        return this.internSchool
    }

    // This gets the interns role which is intern
    role() { 
        return Intern
    }

    // This get the intern's employee Id
    getId() {
        return this.internId;
    }
}

module.exports = Intern;