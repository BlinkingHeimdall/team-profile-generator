const Employee = require('../lib/Employee')

test('creates an Employee object',() => {
    const employee = new Employee('Max');
    expect(employee.employeeName).toBe('Max');
    expect(employee.getEmail()).toEqual(employee.email);
})