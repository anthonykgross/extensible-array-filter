import "@anthonykgross/extensible-array-filter";

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
    { field: 'name', operator: 'contains', value: '1' },
]);
console.log(result)