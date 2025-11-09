/**
 * Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
 * Create two students, and create an array named studentsList containing two variables
 * Using Vanilla JavaScript, render a table and for each elements in the array, append a new row to the table
 * Each row should contain the first name of the student and the location
*/


interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    location: 'Abuja'
}
const student2: Student = {
    firstName: "Mary", 
    lastName: "Joseph", 
    age: 39,
    location: 'Warri' 
}

const studentsList: Student[]= [student1, student2]

function createTable(students: Student[]):void {
    // Create table
    const table = document.createElement('table')
    table.style.border = '1px solid black';

    const tbody = document.createElement('tbody')
        
    // Create header row
    const headerRow = document.createElement('tr')
    const firstNameHeader = document.createElement('th')
    const locationHeader = document.createElement('th') 
    firstNameHeader.textContent = 'First Name'
    locationHeader.textContent = 'Location';
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tbody.appendChild(headerRow);

    // Append rows for each student
    studentsList.forEach(student => {
        
        const row = document.createElement('tr')

        const firstNameCell = document.createElement('td')
        firstNameCell.textContent = student1.firstName

        const locationCell = document.createElement('td')
        locationCell.textContent = student1.location;

        row.appendChild(firstNameCell);
        row.appendChild(row);
        tbody.appendChild(row);
    });

    table.appendChild(tbody)
    document.body.appendChild(table)
}