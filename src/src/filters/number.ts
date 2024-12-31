import {Filter} from "./base";
import {Clause} from "../types";

export abstract class NumberFilter extends Filter {

}

/**
 * Search item where its value is less than a specific number.
 */
export class NumberLtFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value < clause.value
    }
}

/**
 * Search item where its value is less or equal than a specific number.
 */
export class NumberLteFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value <= clause.value
    }
}

/**
 * Search item where its value is equal to a specific number.
 */
export class NumberEqualFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value === clause.value
    }
}

/**
 * Search item where its value is not equal to a specific number.
 */
export class NumberNotEqualFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value !== 'number' || value !== clause.value
    }
}

/**
 * Search item where its value is greater than a specific number.
 */
export class NumberGtFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value > clause.value
    }
}

/**
 * Search item where its value is greater or equal than a specific number.
 */
export class NumberGteFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value >= clause.value
    }
}
