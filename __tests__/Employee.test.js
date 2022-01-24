const Employee = require("../lib/Employee");

test('creation of employee object', () => {
    const employee = new Employee('Julian');
    expect(typeof(employee)).toBe('object');
});

test('gets employee name', () => {
    const name = "test name";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('gets employee id', () => {
    const id = "5";
    const employee = new Employee("test name", id);
    expect(employee.getId()).toBe(id);
});

test('gets employee email', () => {
    const email = "email@email.com";
    const employee = new Employee("test name", "5", "email@email.com");
    expect(employee.getEmail()).toBe(email);
});

test('gets employee role', () => {
    const role = "Employee";
    const employee = new Employee(role);
    expect(employee.getRole()).toBe(role);
});