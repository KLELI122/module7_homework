const employee = {
    name: 'Ivan',
    surname: 'Mikhalev',
    post: 'developer',
    salary: 70000
}

function checkPropertyExists(employee, str) {
    let result = (str in employee) ? true : false;
    return result;
}

const str = 'post';
console.log(checkPropertyExists(employee, str));