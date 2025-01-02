# Advanced Array Filter
[![Test and Publish](https://github.com/anthonykgross/extensible-array-filter/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/anthonykgross/extensible-array-filter/actions/workflows/main.yml)

A TypeScript library that provides a simple and intuitive methods for filtering arrays based on specified filters. It includes a generic filter interface for better type checking and autocompletion.


## Installation

Install the package using npm:

```
npm install extensible-array-filter
```

## Usage

Import the library in your TypeScript project:

```typescript
import 'extensible-array-filter';
```

Declare an interface for your data:

```typescript
interface Example {
id: number;
name: string;
tags: string[];
}
```

Create a sample data array:

```typescript
const data: Example[] = [
{ id: 1, name: 'Example 1', tags: ['tag1', 'tag2'] },
{ id: 2, name: 'Example 2', tags: ['tag2', 'tag3'] },
{ id: 3, name: 'Example 3', tags: ['tag1', 'tag3'] },
];
```

Apply filters using the .where(...) method:

```typescript
const result = data.where([
    { field: 'id', operator: '>', value: 1 },
    { field: 'name', operator: 'contains', value: 2 },
]);
// Expected output:  [
//    { id: 2, name: 'Example 2', tags: ['tag2', 'tag3'] },
// ]
```

Apply filters using the .orWhere(...) method:

```typescript
const result = data.orWhere([
    { field: 'id', operator: '==', value: 1 },
    { field: 'id', operator: '==', value: 2 },
]);
// Expected output:  [
//    { id: 1, name: 'Example 1', tags: ['tag1', 'tag2'] },
//    { id: 2, name: 'Example 2', tags: ['tag2', 'tag3'] },
// ]
```

## Supported Filters
|Operator|Description|Filter values|
|---|---|---|
||||
|**Generic**|||
| < | less | Date \ Number |
| <= | less or equal | Date \ Number |
| == | equal | Date \ Number |
| != | not equal | Date \ Number |
| \> | greater | Date \ Number |
| >= | greater or equal | Date \ Number |
||||
|**Boolean**|||
| boolean-== | equal | Boolean |
| boolean-!= | not equal | Boolean |
||||
|**Date**|||
| date-< | less | Date |
| date-<= | less or equal | Date |
| date-== | equal | Date |
| date-!= | not equal | Date |
| date-> | greater | Date |
| date->= | greater or equal | Date |
||||
|**Number**|||
| number-< | less | Number |
| number-<= | less or equal | Number |
| number-== | equal | Number |
| number-!= | not equal | Number |
| number-> | greater | Number |
| number->= | greater or equal | Number |
||||
|**String**|||
| contains | equal | String |
| strictly-contains | equal | String |
||||
| **Any** |||
| regex | equal | Any |
| custom | - | Any |

## Define your custom filter
```typescript
const fn = (item: Example, value: any) => {
    // where id === 1 or id === 2
    return item.id === value || item.id === value+1
}

const result = data.where([
    { field: '?', operator: 'custom', value: 1 , test: fn },
]);
// Expected output:  [
//    { id: 1, name: 'Example 1', tags: ['tag1', 'tag2'] },
//    { id: 2, name: 'Example 2', tags: ['tag2', 'tag3'] },
// ]
```

**Fork from**
- <https://github.com/arthurkowalsky/ts-array-filter>

## Contributors
**Anthony K GROSS**
- <http://anthonykgross.fr>
- <https://twitter.com/anthonykgross>
- <https://github.com/anthonykgross>

**Arthur KOWALSKY**
- <https://github.com/arthurkowalsky>

## Copyright and license
Code and documentation copyright 2024. Code released under [the MIT license](https://github.com/anthonykgross/extensible-array-filter/blob/main/LICENSE).