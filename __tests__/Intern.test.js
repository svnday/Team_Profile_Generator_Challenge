const Intern = require('../lib/Intern');

test('get school', () => {
    const testSchool = 'UT Austin';
    const employee = new Intern('name', '15', 'email@email.com', testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});

test('get role', () => {
    const testRole = 'Intern';
    const employee = new Intern('name', '15', 'email@email.com', 'UT Austin');
    expect(employee.getRole()).toBe(testRole);
});