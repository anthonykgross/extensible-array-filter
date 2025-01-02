import {Filter} from "./base";
import {Clause} from "../types";

export abstract class BooleanFilter extends Filter {

}

export class BooleanEqualFilter extends BooleanFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (
            value !== undefined && value !== null &&
            clause.value !== undefined && clause.value !== null
        ) {
            let strSearch = clause.value.toString().toUpperCase()
            let boolSearch = (strSearch === 'TRUE' || strSearch === '1' || strSearch === 'Y' || strSearch === 'O')
            let strValue = value.toString().toUpperCase()
            let boolValue = (strValue === 'TRUE' || strValue === '1' || strValue === 'Y' || strValue === 'O')
            return boolSearch === boolValue
        }
        return false
    }
}

export class BooleanNotEqualFilter extends BooleanFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (
            value !== undefined && value !== null &&
            clause.value !== undefined && clause.value !== null
        ) {
            let strSearch = clause.value.toString().toUpperCase()
            let boolSearch = (strSearch === 'TRUE' || strSearch === '1' || strSearch === 'Y' || strSearch === 'O')
            let strValue = value.toString().toUpperCase()
            let boolValue = (strValue === 'TRUE' || strValue === '1' || strValue === 'Y' || strValue === 'O')
            return boolSearch !== boolValue
        }
        return true
    }
}