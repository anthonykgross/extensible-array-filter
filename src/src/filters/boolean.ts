import {Validator} from "./base";

export class BooleanEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (
            value !== undefined && value !== null &&
            search !== undefined && search !== null
        ) {
            let strSearch = search.toString().toUpperCase()
            let boolSearch = (strSearch === 'TRUE' || strSearch === '1' || strSearch === 'Y' || strSearch === 'O')
            let strValue = value.toString().toUpperCase()
            let boolValue = (strValue === 'TRUE' || strValue === '1' || strValue === 'Y' || strValue === 'O')
            return boolSearch === boolValue
        }
        return false
    }
}

export class BooleanNotEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (
            value !== undefined && value !== null &&
            search !== undefined && search !== null
        ) {
            let strSearch = search.toString().toUpperCase()
            let boolSearch = (strSearch === 'TRUE' || strSearch === '1' || strSearch === 'Y' || strSearch === 'O')
            let strValue = value.toString().toUpperCase()
            let boolValue = (strValue === 'TRUE' || strValue === '1' || strValue === 'Y' || strValue === 'O')
            return boolSearch !== boolValue
        }
        return true
    }
}