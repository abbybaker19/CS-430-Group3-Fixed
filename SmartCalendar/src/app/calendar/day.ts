import { CalendarEvent } from "./event";

export interface Day {
    date: Date;
    events: CalendarEvent[];
}

export interface Days extends Array<Day>{}