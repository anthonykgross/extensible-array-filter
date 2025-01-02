import {Filter} from "./base";
import {Clause} from "../types";

export abstract class NumberFilter extends Filter {

}

export class NumberLtFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value < clause.value
    }
}

export class NumberLteFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value <= clause.value
    }
}

export class NumberEqualFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value === clause.value
    }
}

export class NumberNotEqualFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value !== 'number' || value !== clause.value
    }
}

export class NumberGtFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value > clause.value
    }
}

export class NumberGteFilter extends NumberFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'number' && value >= clause.value
    }
}
