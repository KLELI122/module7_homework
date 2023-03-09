const employee = {
    name: 'Ivan',
    surname: 'Mikhalev',
    post: 'developer',
    salary: 70000
}

function getInfo(employee) {
    for (let key in employee) {
        if (employee.hasOwnProperty(key)) {
            console.log(`${key}: ${employee[key]}`); 
        }
    }
}

getInfo(employee);