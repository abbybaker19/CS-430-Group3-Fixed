import { Event } from "../event/event";

export interface Day {
    date: Date;
    events: Event[];
}

export interface Days extends Array<Day>{}