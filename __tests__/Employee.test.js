const Employee = require('../lib/Employee.js');

test('gets employee info', () => {
    const employee = new Employee('Julian')

    expect(employee.name).toBe('Julian');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));

})