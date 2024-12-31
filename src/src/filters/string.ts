import {Validator} from "./base";

export class StringContainsValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'string' && new RegExp(search, "gi").test(value)
    }
}

export class StringStrictlyContainsValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'string' && value.includes(search)
    }
}

export class RegexValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'string' && new RegExp(search).test(value)
    }
}