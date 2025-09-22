employee1 = {
    name: "Jane",
    lastName: "Smith",
    age: 32,
    company: ["Google", "Microsoft", "Amazon"]
}
employee2 = {
    name: "Emily",
    lastName: "Davis",
    age: 29,
    company: ["Facebook", "Apple", "Netflix", "Tesla", "Spotify"]
}

function printCompany(employee) {
    console.log("Companies of " + employee.name + ": ");
    for (let company of employee.company) {
        console.log(company);
    }
}
function compareEmployees(emp1, emp2) {
    if (emp1.company.length > emp2.company.length) {
        console.log(emp1.name + " has worked at more companies than " + emp2.name);
        printCompany(emp1);
    } else if (emp1.company.length < emp2.company.length) {
        console.log(emp2.name + " has worked at more companies than " + emp1.name);
        printCompany(emp2);
    } else {
        console.log(emp1.name + " and " + emp2.name + " have worked at the same number of companies");
        printCompany(emp1);
        printCompany(emp2);
    }

}

compareEmployees(employee1, employee2);