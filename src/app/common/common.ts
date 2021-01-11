export class Variables {
    
    static API_SERVER = 'http://192.168.192.51:5000';
}

abstract class BasicItem {
    
    id?: number;
    tempId?: number;
    title: string;
    description?: string;
    dateCreated: Date;
}

export enum Scope {
    Day = 1,
    Week = 2,
    Month = 3,
    Year = 4,
    Default = Week
}

export class TodoItem extends BasicItem {

    spanId: string;
    scope: Scope;
    goalId?: number;
    goalTitle?: string; // Nur intern für die Anzeige vom Hover-Text. Wird von Backend etc ignoriert.
    deadline?: Date;
    done: boolean;
}

export class GoalItem extends BasicItem {

    // todoItemIds: number[];
    deadline?: Date;
}

export class DailyaimItem extends BasicItem {

    intervalInDays: number;
    active: boolean;
}

export class EventItem extends BasicItem {
    
    startDate: Date;
    endDate: Date;
    position?: { x: number; y: number; } // Nur intern für die Anzeige im Kalender.
}

export enum HttpMethod {
    POST = 1,
    GET = 2,
    PUT = 3,
    DELETE = 4
}

export class Dates {

    static isInSpan(date: Date, spanId: Date, scope: Scope): boolean {
        switch(scope) {
            case Scope.Day:
                return date.getFullYear() === spanId.getFullYear() &&
                    date.getMonth() === spanId.getMonth() &&
                    date.getDate() === spanId.getDate();
            case Scope.Week:
                return date.getFullYear() === spanId.getFullYear() &&
                    date.getMonth() === spanId.getMonth() &&
                    date.getDate() - spanId.getDate() <= 6 &&
                    date.getDate() - spanId.getDate() >= 0;
            case Scope.Month:
                return date.getFullYear() === spanId.getFullYear() &&
                    date.getMonth() === spanId.getMonth();
            case Scope.Year:
                return date.getFullYear() === spanId.getFullYear();
        }
    }
}

export class Events {

    static interfere(event1: Event, event2: Event): boolean {
        return false
    }
}