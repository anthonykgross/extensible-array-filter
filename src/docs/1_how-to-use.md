---
title: How to use it
category: Get Started
---

# How to use it

## Import @anthonykgross/extensible-array-filter
```typescript
import "@anthonykgross/extensible-array-filter";
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
        { field: 'name', operator: 'contains', value: '1' },
    ]
);

// Expected output: [ { id: 1, name: 'Example 1' } ]
```

## See also
- [Installation](0_index.md)
- [Create your own filter](2_extending-filter.md)
- [Use it for your HTML page](3_use-bundle.md)
