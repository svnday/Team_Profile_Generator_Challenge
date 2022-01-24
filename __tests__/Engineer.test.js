const Engineer = require('../lib/Engineer');

test('get github usernamer', () => {
    const testGithub = 'testGithub';
    const employee = new Engineer('name', '5', 'email@email.com', testGithub);
    expect(employee.getGithub()).toBe(testGithub);
});

test('get role', () => {
    const testRole = 'Engineer';
    const employee = new Engineer('name', '5', 'email@email.com', 'testGithub');
    expect(employee.getRole()).toBe(testRole);
});
