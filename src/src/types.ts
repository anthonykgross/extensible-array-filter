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
    CustomFilter,
    StringLtFilter,
    StringLteFilter,
    StringEqualFilter,
    StringGteFilter,
    StringGtFilter,
    StringNotEqualFilter
} from "./filters";

/**
 * By default, we are filtering {@link Clause | Clauses} with the operator values
 */
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

    | 'string-<'
    | 'string-<='
    | 'string-=='
    | 'string->'
    | 'string->='
    | 'string-!='

    | 'contains'
    | 'strictly-contains'
    | 'regex'
    | 'custom'

/**
 * {@link Clause} is a way to call a {@link Filter} based on the `value`.
 * @property field The property name
 * @property operator Which {@link Filter} to apply on this property name
 * @property value Which `value` has to be found by the {@link Filter}
 * @property test For {@link CustomFilter}, we want to apply a filter dynamically
 */
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

    'string-<': StringLtFilter,
    'string-<=': StringLteFilter,
    'string-==': StringEqualFilter,
    'string->': StringGtFilter,
    'string->=': StringGteFilter,
    'string-!=': StringNotEqualFilter,

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