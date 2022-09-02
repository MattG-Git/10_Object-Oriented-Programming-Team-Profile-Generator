const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Assigns the school to the intern object', () => {
        const testSchool = 'University';
        const intern = new Intern('name', 1, 'name@gmail.com', testSchool);
        expect(intern.school).toEqual(testSchool);
    });

    it('Initializes the getSchool() method that retrieves the school', () => {
        const testInputSchool = 'University';
        const intern = new Intern('name', 1, 'name@gmail.com', testInputSchool);
        expect(intern.getSchool()).toEqual(testInputSchool);
    });

    it('Initializes the getRole() method that returns the intern object with all the object properties', () => {
        const testRole = 'Intern'
        const intern = new Intern('name', 1, 'name@gmail.com', 'University');
        expect(intern.getRole()).toEqual(testRole);
    });
})