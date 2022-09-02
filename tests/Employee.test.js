const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Creates an employee object from Employee class', () => {
            const obj = new Employee();
            expect(typeof (obj)).toEqual('object');
        });
    });

    it('Assigns a name to the employee object', () => {
        const testName = 'name';
        const employee = new Employee(testName);
        expect(employee.name).toEqual(testName);
    });

    it('Assigns an id to the employee object', () => {
        const testId = 999;
        const employee = new Employee('name', testId);
        expect(employee.id).toEqual(testId);
    });

    it('Assigns an email to the employee object', () => {
        const testEmail= 'name@gmail.com';
        const employee = new Employee('name', 1, testEmail);
        expect(employee.email).toEqual(testEmail);
    });

    it('Initializes the getName() method that retrieves name', () => {
        const testInputName = 'name'
        const employee = new Employee(testInputName);
        expect(employee.getName()).toEqual(testInputName);
    });

    it('Initializes the getId() method that retrieves id', () => {
        const testInputId = 999;
        const employee = new Employee('name', testInputId);
        expect(employee.getId()).toEqual(testInputId);
    });

    it('Initializes the getEmail() method that retrieves email', () => {
        const testInputEmail = 'name@gmail.com';
        const employee = new Employee('name', 1, testInputEmail);
        expect(employee.getEmail()).toEqual(testInputEmail);
    });

    it('Initializes the getRole() method that returns the employee object with all the object properties', () => {
        const testRole = 'Employee';
        const employee = new Employee('name', 1, 'name@gmail.com');
        expect(employee.getRole()).toEqual(testRole);
    });
})