//this function will display the manager tile
const managerTile = (manager) => {
    return `
    <div class="card">
        <div class="card-body">
            <h2>${manager.name}</h2>
            <h5>Manager</h5>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
};

//this function will display the engineer tile
const engineerTile = (engineers) => {
    return engineers.map(engineer =>{
        return `
        <div class="card">
            <div class="card-body">
                <h2>${engineer.name}</h2>
                <h5>Engineer</h5>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `})
    .join(" ");
};

//this function will display the intern tile
const internTile = (interns) => {
    return interns.map(intern =>{
        return `
        <div class="card">
            <div class="card-body">
                <h2>${intern.name}</h2>
                <h5>Intern</h5>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    `})
    .join(" ");
};

//this function generates the master html file that will display all of the html tiles for the different team members
const generateTeamHtml = (managerTile, engineerTile, internTile) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div>
        <div>
            <h1>My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center mt-5">
            ${managerTile} ${engineerTile} ${internTile}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>"></script>
</body>
</html>  `
};

module.exports = {
    generateTeamHtml,
    managerTile,
    engineerTile,
    internTile
};