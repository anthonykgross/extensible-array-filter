import {Clause, Filters, getDefaultFilters, StringFilter} from "@anthonykgross/extensible-array-filter";

class MyFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && new RegExp(clause.value, "gi").test(value)
    }
}

let filters: Filters = {
    ...getDefaultFilters,
    'my-operator': MyFilter,
}

interface Row {
    id: number;
    name: string;
}

const rows: Row[] = [
    { id: 1, name: 'Example 1'},
    { id: 2, name: 'Example 2'},
    { id: 3, name: 'Example 3'},
];

const result = rows.where([
    { field: 'id', operator: 'my-operator', value: 1 },
], filters);

console.log(result)