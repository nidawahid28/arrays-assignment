/*Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and logic to 
manage student grades effectively.
1. Define a TypeScript type alias named Student to represent a student with the 
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.
2. Create an array named students containing at least three student objects. Each student 
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as 
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array, 
calculate the average grade for each student using the calculateAverageGrade 
function, and print their name and average grade.*/

//1. Define a type alias for Student

type Student = {
    name: string;
    grades: number[];
};

//2. Create an array of students
const students: Student[] = [
    {name: "Ali", grades:[90, 85, 70]},
    {name: "Bisma", grades:[65, 75, 80 ]},
    {name: "Bilal", grades:[95, 88, 90]},
];

// Function to calculate average grade

function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((sum,grade) => sum + grade, 0);
    return total/grades.length;
}

students.forEach(students => {
    const averageGrade = calculateAverageGrade(students.grades);
    console.log(`${students.name}'s average grade is ${averageGrade.toFixed(2)}`);
    
});