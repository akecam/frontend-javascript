interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Daniel",
    lastName: "Vector",
    age: 14,
    location: "Abuja",
}

const student2: Student = {
    firstName: "Josiah",
    lastName: "Philip",
    age: 15,
    location: "Lagos",
}

const studentList: Student[] = [
    student1,
    student2
];

const table: HTMLTableElement = document.createElement('table');

const tableHeaderRow: HTMLTableRowElement = document.createElement('tr');
for (const student in studentList[0]) {
    const th: HTMLTableHeaderCellElement = document.createElement('th');
    th.textContent = student.toUpperCase();
    tableHeaderRow.appendChild(th);
}
table.appendChild(tableHeaderRow);


for (const student of studentList) {
    const studentRow: HTMLTableRowElement = document.createElement('tr');

    for (const prop in student) {
        const studentData: HTMLTableDataCellElement = document.createElement('td');
        studentData.textContent = String(student[prop as keyof Student]);
        studentRow.appendChild(studentData);
    }

    table.appendChild(studentRow);
}

document.querySelector('#index').appendChild(table);



