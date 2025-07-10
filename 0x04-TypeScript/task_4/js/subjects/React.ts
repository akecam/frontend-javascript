/// <reference path="Cpp.ts" />

namespace Subjects {

    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list if requirements for React";
        }

        getAvailableTeacher(): string {
            if (typeof this.teacher.experienceTeachingReact == "undefined") {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}