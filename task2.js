const employee = {
    name: 'Ivan',
    surname: 'Mikhalev',
    post: 'developer',
    salary: 70000
}

function checkPropertyExists(employee, str) {
    return (str in employee);
}

const str = 'post';
console.log(checkPropertyExists(employee, str));