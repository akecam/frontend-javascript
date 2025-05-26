interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Daniel",
    lastName: "Samson",
    age: 34,
    location: "Nigeria",
}

const student2: Student = {
    firstName: "Favour",
    lastName: "Segun",
    age: 29,
    location: "Nigeria",
}

const studentsList: Student[] = [student1, student2]


const renderToTable = () => {

    const table: HTMLTableElement = document.querySelector('table');

    studentsList.forEach(student => {
        const tr: HTMLTableRowElement = document.createElement('tr');
        const firstName: HTMLTableCellElement = document.createElement('td');
        const lastName: HTMLTableCellElement = document.createElement('td');
        const age: HTMLTableCellElement = document.createElement('td');
        const location: HTMLTableCellElement = document.createElement('td');
    
        firstName.textContent = student.firstName;
        lastName.textContent = student.lastName;
        age.textContent = String(student.age);
        location.textContent = student.location;
    
        tr.appendChild(firstName);
        tr.appendChild(lastName);
        tr.appendChild(age);
        tr.appendChild(location);
        table.appendChild(tr);
    })
}