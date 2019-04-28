var newEmployee1 = new Employee('Jon', 'Sales', '$100k')

function Employee(name, jobTitle, salary, status = "Full time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}
newEmployee1.status = "Contract";
const newEmployee2 = new Employee("Joan", "CEO", "$400k");
const newEmployee3 = new Employee("Dave", "Customer Service", "$50k", "Full Time");
const newEmployee4 = new Employee("Pete", "Developer", "$100k", "Full Time");

employees = [];
for (i = 0; i <= Employee.length; i++) {
    employees.push(Employee);
}
console.log(Employee.length)
console.log(Employee)

function printEmployeeForm() {
    for (i = 0; i <= Employee.length; i++)
    return (Employee[i])
}
console.log(Employee.length)
console.log(newEmployee1)

/*
var newEmployee1 = new Employee("John", "CEO", "$250k")
var employees = [name = 'Jon', jobTitle = 'CFO', salary = '$250k']

newEmployee1.status = "Part Time";

var newEmployee2 = new Employee("Joan", "Sales", "$100k", "Contract");
var newEmployee3 = new Employee("Dave", "Customer Service", "$50k", "Full Time");
var newEmployee5 = new Employee("Pete", "Developer", "$100k", "Full Time");

var printEmployeeForm = Employee
printEmployeeForm.forEach(Employee) {
    console.log(this.name + this.jobTitle + this.salary + this.status)
};


vegetables.forEach(function(vegetable) {
    console.log(vegetable);
});
console.log(Employee.length);

//employee.push(newEmployee2);
employee.push(newEmployee3);
employee.push(newEmployee5);

printEmployeeForm.forEach(Employee(name) {
    console.log(this.name + this.jobTitle + this.salary + this.status)
});

*/