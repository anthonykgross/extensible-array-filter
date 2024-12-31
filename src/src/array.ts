export {};

declare global {
    interface Array<T> {
        where(filters: Filter<T>[]): T[];
        orWhere(filters: Filter<T>[]): T[];
    }
}

export type FilterOperator =
    '<'
    | '<='
    | '=='
    | '>'
    | '>='
    | '!='

    | 'boolean-=='
    | 'boolean-!='

    | 'date-<'
    | 'date-<='
    | 'date-=='
    | 'date->'
    | 'date->='
    | 'date-!='

    | 'number-<'
    | 'number-<='
    | 'number-=='
    | 'number->'
    | 'number->='
    | 'number-!='

    | 'contains'
    | 'strictly-contains'
    | 'regex'
    | 'custom'

interface Filter<T> {
    field: keyof T
    operator: FilterOperator
    value?: any
    test?: (item: T, search: any) => boolean
}

abstract class Validator {
    abstract validate: (field: any, item: any, search: any) => boolean
}

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

export class DateLtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value < new Date(Date.parse(search))
    }
}

export class DateLteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value <= new Date(Date.parse(search))
    }
}

export class DateGtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value > new Date(Date.parse(search))
    }
}

export class DateGteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value >= new Date(Date.parse(search))
    }
}

export class DateEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value.getTime() === new Date(Date.parse(search)).getTime()
    }
}

export class DateNotEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value.getTime() !== new Date(Date.parse(search)).getTime()
    }
}

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

const isFiltered = function <T>(item: T, filter: Filter<T>): boolean {
    let v = undefined

    switch (filter.operator) {
        case '<':
            v = new LtValidator()
            return v.validate(filter.field, item, filter.value)
        case '<=':
            v = new LteValidator()
            return v.validate(filter.field, item, filter.value)
        case '==':
            v = new EqualValidator()
            return v.validate(filter.field, item, filter.value)
        case '>':
            v = new GtValidator()
            return v.validate(filter.field, item, filter.value)
        case '>=':
            v = new GteValidator()
            return v.validate(filter.field, item, filter.value)
        case '!=':
            v = new NotEqualValidator()
            return v.validate(filter.field, item, filter.value)

        case 'number-<':
            v = new NumberLtValidator()
            return v.validate(filter.field, item, filter.value)
        case 'number-<=':
            v = new NumberLteValidator()
            return v.validate(filter.field, item, filter.value)
        case 'number-==':
            v = new NumberEqualValidator()
            return v.validate(filter.field, item, filter.value)
        case 'number->':
            v = new NumberGtValidator()
            return v.validate(filter.field, item, filter.value)
        case 'number->=':
            v = new NumberGteValidator()
            return v.validate(filter.field, item, filter.value)
        case 'number-!=':
            v = new NumberNotEqualValidator()
            return v.validate(filter.field, item, filter.value)

        case 'boolean-==':
            v = new BooleanEqualValidator()
            return v.validate(filter.field, item, filter.value)
        case 'boolean-!=':
            v = new BooleanNotEqualValidator()
            return v.validate(filter.field, item, filter.value)

        case 'date-<':
            v = new DateLtValidator()
            return v.validate(filter.field, item, filter.value)
        case 'date-<=':
            v = new DateLteValidator()
            return v.validate(filter.field, item, filter.value)
        case 'date-==':
            v = new DateEqualValidator()
            return v.validate(filter.field, item, filter.value)
        case 'date->':
            v = new DateGtValidator()
            return v.validate(filter.field, item, filter.value)
        case 'date->=':
            v = new DateGteValidator()
            return v.validate(filter.field, item, filter.value)
        case 'date-!=':
            v = new DateNotEqualValidator()
            return v.validate(filter.field, item, filter.value)

        case 'contains':
            v = new StringContainsValidator()
            return v.validate(filter.field, item, filter.value)
        case 'strictly-contains':
            v = new StringStrictlyContainsValidator()
            return v.validate(filter.field, item, filter.value)
        case 'regex':
            v = new RegexValidator()
            return v.validate(filter.field, item, filter.value)
        case 'custom':
            if (filter.test) {
                return filter.test(item, filter.value)
            }
            return false;
        default:
            return false;
    }
}

Array.prototype.where = function <T>(filters: Filter<T>[]): T[] {
    const data = this as T[];

    return data.filter((item: T) => {
        return filters.every((filter: Filter<T>) => isFiltered(item, filter));
    });
};

Array.prototype.orWhere = function <T>(filters: Filter<T>[]): T[] {
    const data = this as T[];

    return data.filter((item: T) => {
        return filters.some((filter: Filter<T>) => isFiltered(item, filter));
    });
};