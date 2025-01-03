import {Filter} from "./base";
import {Clause} from "../types";

export abstract class DateFilter extends Filter {

}

export class DateLtFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value < new Date(Date.parse(clause.value))
    }
}

export class DateLteFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value <= new Date(Date.parse(clause.value))
    }
}

export class DateGtFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value > new Date(Date.parse(clause.value))
    }
}

export class DateGteFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value >= new Date(Date.parse(clause.value))
    }
}

export class DateEqualFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value.getTime() === new Date(Date.parse(clause.value)).getTime()
    }
}

export class DateNotEqualFilter extends DateFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return value instanceof Date && value.getTime() !== new Date(Date.parse(clause.value)).getTime()
    }
}
