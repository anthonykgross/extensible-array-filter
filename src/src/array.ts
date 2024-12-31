import {
    BooleanEqualValidator,
    BooleanNotEqualValidator,
    DateEqualValidator,
    DateGteValidator,
    DateGtValidator,
    DateLteValidator,
    DateLtValidator,
    DateNotEqualValidator,
    EqualValidator,
    GteValidator,
    GtValidator,
    LteValidator,
    LtValidator,
    NotEqualValidator,
    NumberEqualValidator,
    NumberGteValidator,
    NumberGtValidator,
    NumberLteValidator,
    NumberLtValidator,
    NumberNotEqualValidator,
    RegexValidator,
    StringContainsValidator,
    StringStrictlyContainsValidator, Validator
} from "./filters";

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