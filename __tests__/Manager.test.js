
const Manager = require("../lib/Manager");

test('get office number', () => {
    const testOffice = 15;
    const employee = new Manager('name', '5', 'email@email.com', testOffice);
    expect(employee.getOfficeNumber()).toBe(testOffice);
});

test('get role', () => {
    const testRole = 'Manager';
    const employee = new Manager('name', '5', 'email@gmail.com', 15);
    expect(employee.getRole()).toBe(testRole);
});
