import {Validator} from "./base";

export class NumberLtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'number' && value < search
    }
}

export class NumberLteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'number' && value <= search
    }
}

export class NumberEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'number' && value === search
    }
}

export class NumberNotEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value !== 'number' || value !== search
    }
}

export class NumberGtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'number' && value > search
    }
}

export class NumberGteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return typeof value === 'number' && value >= search
    }
}
