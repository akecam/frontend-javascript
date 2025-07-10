interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}


class Teacher implements TeacherInterface {
    
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary == "string") {
        salary = parseInt(salary.slice(1))
    }
    return salary < 500 ? new Teacher() : new Director();
}

const isDirector = (employee: Director | Teacher): employee is Director => {
    return employee instanceof Director;
}


const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): "Teaching Math" | "Teaching History" => {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

