import {Filter} from "./base";
import {Clause} from "../types";

export abstract class DateFilter extends Filter {

}

/**
* Search item where its value is less than a specific date.
*/
export class DateLtFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value < new Date(Date.parse(clause.value))
    }
}

/**
 * Search item where its value is less or equal than a specific date.
 */
export class DateLteFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value <= new Date(Date.parse(clause.value))
    }
}

/**
 * Search item where its value is greater than a specific date.
 */
export class DateGtFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value > new Date(Date.parse(clause.value))
    }
}

/**
 * Search item where its value is greater or equal than a specific date.
 */
export class DateGteFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value >= new Date(Date.parse(clause.value))
    }
}

/**
 * Search item where its value is equal to a specific date.
 */
export class DateEqualFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value.getTime() === new Date(Date.parse(clause.value)).getTime()
    }
}

/**
 * Search item where its value is not equal to a specific date.
 */
export class DateNotEqualFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value.getTime() !== new Date(Date.parse(clause.value)).getTime()
    }
}
