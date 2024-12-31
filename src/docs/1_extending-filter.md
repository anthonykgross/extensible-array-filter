---
title: Extending filter
category: Get Started
---

# Extending filter

## Create your filter
```typescript
import {Clause, Filters, getDefaultFilters, StringFilter} from "@anthonykgross/extensible-array-filter";

class MyFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && new RegExp(clause.value, "gi").test(value)
    }
}
```

## Add your filter
```typescript
let filters: Filters = {
    ...getDefaultFilters,
    'my-operator': MyFilter,
}
```
or
```typescript
let filters: Filters = {
    'my-operator': MyFilter,
}
```

## Define your data
```typescript
interface Row {
    id: number;
    name: string;
}

const rows: Row[] = [
    { id: 1, name: 'Example 1'},
    { id: 2, name: 'Example 2'},
    { id: 3, name: 'Example 3'},
];
```

## Define your Clauses
```typescript
rows.where(
    [
        { field: 'name', operator: 'my-operator', value: '1' },
    ], 
    filters
);

// Expected output: [ { id: 1, name: 'Example 1' } ]
```
