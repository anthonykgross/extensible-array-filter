import {
    NumberEqualFilter, NumberGteFilter,
    NumberGtFilter,
    NumberLteFilter,
    NumberLtFilter,
    NumberNotEqualFilter
} from "./number";
import {
    DateEqualFilter,
    DateGteFilter,
    DateGtFilter,
    DateLteFilter,
    DateLtFilter,
    DateNotEqualFilter
} from "./date";
import {Filter} from "./base";
import {Clause} from "../types";

export abstract class GenericFilter extends Filter {

}

export class LtFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (typeof value === 'number') {
            return new NumberLtFilter().assert(clause, item)
        }
        if (value instanceof Date) {
            return new DateLtFilter().assert(clause, item)
        }
        return false
    }
}

export class LteFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (typeof value === 'number') {
            return new NumberLteFilter().assert(clause, item)
        }
        if (value instanceof Date) {
            return new DateLteFilter().assert(clause, item)
        }
        return false
    }
}

export class EqualFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (typeof value === 'number') {
            return new NumberEqualFilter().assert(clause, item)
        }
        if (value instanceof Date) {
            return new DateEqualFilter().assert(clause, item)
        }
        return false
    }
}

export class NotEqualFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (typeof value === 'number') {
            return new NumberNotEqualFilter().assert(clause, item)
        }
        if (value instanceof Date) {
            return new DateNotEqualFilter().assert(clause, item)
        }
        return true
    }
}

export class GtFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (typeof value === 'number') {
            return new NumberGtFilter().assert(clause, item)
        }
        if (value instanceof Date) {
            return new DateGtFilter().assert(clause, item)
        }
        return false
    }
}

export class GteFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (typeof value === 'number') {
            return new NumberGteFilter().assert(clause, item)
        }
        if (value instanceof Date) {
            return new DateGteFilter().assert(clause, item)
        }
        return false
    }
}

export class CustomFilter extends GenericFilter {
    assert = (clause: Clause<any>, item: any) => {
        if (clause.test) {
            return clause.test(item, clause.value);
        }
        return false
    }
}