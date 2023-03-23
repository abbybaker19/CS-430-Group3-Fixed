import { Days } from "./day";

export interface Week {
    days: Days;
}

export interface Weeks extends Array<Week> {}