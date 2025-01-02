import {
    BooleanEqualFilter,
    BooleanNotEqualFilter,
    DateEqualFilter,
    DateGteFilter,
    DateGtFilter,
    DateLteFilter,
    DateLtFilter,
    DateNotEqualFilter,
    EqualFilter,
    GteFilter,
    GtFilter,
    LteFilter,
    LtFilter,
    NotEqualFilter,
    NumberEqualFilter,
    NumberGteFilter,
    NumberGtFilter,
    NumberLteFilter,
    NumberLtFilter,
    NumberNotEqualFilter,
    RegexFilter,
    StringContainsFilter,
    StringStrictlyContainsFilter,
    Filter,
    CustomFilter
} from "./filters";

export type DefaultClauseOperator =
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

export interface Clause<T> {
    field: keyof T
    operator: DefaultClauseOperator | string
    value?: any
    test?: (item: T, search: any) => boolean
}

export interface Filters {
    [e: DefaultClauseOperator | string]: new () => Filter
}

export const getDefaultFilters: Filters = {
    '<': LtFilter,
    '<=': LteFilter,
    '==': EqualFilter,
    '>': GtFilter,
    '>=': GteFilter,
    '!=': NotEqualFilter,

    'number-<': NumberLtFilter,
    'number-<=': NumberLteFilter,
    'number-==': NumberEqualFilter,
    'number->': NumberGtFilter,
    'number->=': NumberGteFilter,
    'number-!=': NumberNotEqualFilter,

    'boolean-==': BooleanEqualFilter,
    'boolean-!=': BooleanNotEqualFilter,

    'date-<': DateLtFilter,
    'date-<=': DateLteFilter,
    'date-==': DateEqualFilter,
    'date->': DateGtFilter,
    'date->=': DateGteFilter,
    'date-!=': DateNotEqualFilter,

    'contains': StringContainsFilter,
    'strictly-contains': StringStrictlyContainsFilter,
    'regex': RegexFilter,

    'custom': CustomFilter,
}