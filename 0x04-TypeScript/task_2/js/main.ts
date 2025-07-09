// Teacher Interface
interface Teacher {
    readonly firstName: string | null;
    readonly lastName: string | null;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Director Interface
interface Directors extends Teacher {
    numberOfReports: number;
}

type printTeacherFunction<T> = (first: T, second: T) => T;

const printTeacher: printTeacherFunction<string> = (firstName: string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
}


// Student Class 

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    public firstName: string;
    public lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): typeof this.firstName {
        return `${this.firstName}`;
    }

}