"use strict";
/*Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and
handle bonuses.
1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.*/
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Define employee array
const employees = [
    { name: "Rehan", hoursWorked: 30, hourlyRate: 200, salary: 0 },
    { name: "Kashif", hoursWorked: 25, hourlyRate: 250, salary: 0 },
    { name: "Farhan", hoursWorked: 20, hourlyRate: 300, salary: 0 },
];
// 3. Implement the calculateSalary Function
function calculateSalary(employee) {
    // Calculate base pay
    let basePay = employee.hoursWorked * employee.hourlyRate;
    // Check for bonus eligibility
    if (employee.hoursWorked >= 20) {
        // Apply 10% bonus
        const bonus = basePay * 0.1;
        basePay += bonus;
    }
    // Update employee salary
    employee.salary = basePay;
    return employee.salary;
}
// Loop through employees and calculate salaries
for (const employee of employees) {
    calculateSalary(employee);
    console.log(`${employee.name} salary: Rs${employee.salary.toFixed(2)}`);
}
