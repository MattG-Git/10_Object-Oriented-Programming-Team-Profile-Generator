const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Assigns the Github username to the engineer object', () => {
        const testUser = 'Github123';
        const engineer = new Engineer('name', 1, 'name@gmail.com', testUser);
        expect(engineer.github).toEqual(testUser);
    });

    it('Initializes the getGithub() method that retrieves Github username', () => {
        const testInputUser =  'Github123';
        const engineer = new Engineer('name', 1, 'name@gmail.com', testInputUser);
        expect(engineer.getGithub()).toEqual(testInputUser);
    });

    it('Initializes the getRole() method that returns the engineer object with all the object properties', () => {
        const testRole = 'Engineer'
        const engineer = new Engineer('name', 1, 'name@gmail.com', 'Github123');
        expect(engineer.getRole()).toEqual(testRole);
    });
})