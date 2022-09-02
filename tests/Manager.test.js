const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Assigns the office number to the intern object', () => {
        const testOffice = 101;
        const manager = new Manager('name', 1, 'name@gmail.com', testOffice);
        expect(manager.officeNumber).toEqual(testOffice);
    });

    it('Initializes the getManagerOffice() method that retrieves the office number', () => {
        const testInputOffice = 101;
        const manager = new Manager('name', 1, 'name@gmail.com', testInputOffice);
        expect(manager.getOfficeNumber()).toEqual(testInputOffice);
    });

    it('Initializes the getRole() method that returns the manager object with all the object properties', () => {
        const testRole = 'Manager'
        const manager = new Manager('name', 1, 'name@gmail.com', 101);
        expect(manager.getRole()).toEqual(testRole);
    });
})