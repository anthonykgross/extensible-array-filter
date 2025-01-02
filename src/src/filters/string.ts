import {Filter} from "./base";
import {Clause} from "../types";

export abstract class StringFilter extends Filter {

}

export class StringContainsFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && new RegExp(clause.value, "gi").test(value)
    }
}

export class StringStrictlyContainsFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && value.includes(clause.value)
    }
}

export class RegexFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && new RegExp(clause.value).test(value)
    }
}