import {
    NumberEqualValidator, NumberGteValidator,
    NumberGtValidator,
    NumberLteValidator,
    NumberLtValidator,
    NumberNotEqualValidator
} from "./number";
import {
    DateEqualValidator,
    DateGteValidator,
    DateGtValidator,
    DateLteValidator,
    DateLtValidator,
    DateNotEqualValidator
} from "./date";
import {Validator} from "./base";

export class LtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (typeof value === 'number') {
            return new NumberLtValidator().validate(field, item, search)
        }
        if (value instanceof Date) {
            return new DateLtValidator().validate(field, item, search)
        }
        return false
    }
}

export class LteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (typeof value === 'number') {
            return new NumberLteValidator().validate(field, item, search)
        }
        if (value instanceof Date) {
            return new DateLteValidator().validate(field, item, search)
        }
        return false
    }
}

export class EqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (typeof value === 'number') {
            return new NumberEqualValidator().validate(field, item, search)
        }
        if (value instanceof Date) {
            return new DateEqualValidator().validate(field, item, search)
        }
        return false
    }
}

export class NotEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (typeof value === 'number') {
            return new NumberNotEqualValidator().validate(field, item, search)
        }
        if (value instanceof Date) {
            return new DateNotEqualValidator().validate(field, item, search)
        }
        return true
    }
}

export class GtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (typeof value === 'number') {
            return new NumberGtValidator().validate(field, item, search)
        }
        if (value instanceof Date) {
            return new DateGtValidator().validate(field, item, search)
        }
        return false
    }
}

export class GteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        if (typeof value === 'number') {
            return new NumberGteValidator().validate(field, item, search)
        }
        if (value instanceof Date) {
            return new DateGteValidator().validate(field, item, search)
        }
        return false
    }
}