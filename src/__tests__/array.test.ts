import {it, expect} from '@jest/globals';
import '../src/array';

it('Array.prototype.where', async () => {
    let a: any = [
        {
            fieldA: 19
        },
        {
            fieldA: 20
        },
        {
            fieldA: 21
        },
    ]

    let result = a.where([
        {field: 'fieldA', operator: '>=', value: 20},
        {field: 'fieldA', operator: 'number->=', value: 20}
    ])
    expect(result).toEqual([
        {fieldA: 20},
        {fieldA: 21}
    ])

    result = a.where([
        {field: 'fieldA', operator: '==', value: 20},
        {field: 'fieldA', operator: 'number-==', value: 20}
    ])
    expect(result).toEqual([
        {fieldA: 20},
    ])

    result = a.where([
        {field: 'fieldA', operator: '!=', value: 20},
        {field: 'fieldA', operator: 'number-!=', value: 20},
    ])
    expect(result).toEqual([
        {fieldA: 19},
        {fieldA: 21}
    ])

    result = a.where([
        {field: 'fieldA', operator: '<', value: 20},
        {field: 'fieldA', operator: 'number-<', value: 20}
    ])
    expect(result).toEqual([
        {fieldA: 19},
    ])

    a = [
        {
            fieldA: new Date(2023, 9, 10)
        },
        {
            fieldA: new Date(2023, 9, 11)
        },
        {
            fieldA: new Date(2023, 9, 12)
        },
    ]

    result = a.where([
        {field: 'fieldA', operator: '>', value: new Date(2023, 9, 11)},
        {field: 'fieldA', operator: 'date->', value: new Date(2023, 9, 11)}
    ])
    expect(result).toEqual([
        {fieldA: new Date(2023, 9, 12)},
    ])

    result = a.where([
        {field: 'fieldA', operator: '>=', value: new Date(2023, 9, 11)},
        {field: 'fieldA', operator: 'date->=', value: new Date(2023, 9, 11)}
    ])
    expect(result).toEqual([
        {fieldA: new Date(2023, 9, 11)},
        {fieldA: new Date(2023, 9, 12)},
    ])

    result = a.where([
        {field: 'fieldA', operator: '==', value: new Date(2023, 9, 11)},
        {field: 'fieldA', operator: 'date-==', value: new Date(2023, 9, 11)}
    ])
    expect(result).toEqual([
        {fieldA: new Date(2023, 9, 11)},
    ])

    result = a.where([
        {field: 'fieldA', operator: '!=', value: new Date(2023, 9, 11)},
        {field: 'fieldA', operator: 'date-!=', value: new Date(2023, 9, 11)},
    ])
    expect(result).toEqual([
        {fieldA: new Date(2023, 9, 10)},
        {fieldA: new Date(2023, 9, 12)}
    ])

    result = a.where([
        {field: 'fieldA', operator: '<', value: new Date(2023, 9, 11)},
        {field: 'fieldA', operator: 'date-<', value: new Date(2023, 9, 11)}
    ])
    expect(result).toEqual([
        {fieldA: new Date(2023, 9, 10)},
    ])

    result = a.where([
        {field: 'fieldA', operator: '<=', value: new Date(2023, 9, 11)},
        {field: 'fieldA', operator: 'date-<=', value: new Date(2023, 9, 11)}
    ])
    expect(result).toEqual([
        {fieldA: new Date(2023, 9, 10)},
        {fieldA: new Date(2023, 9, 11)},
    ])

    a = [
        {
            fieldA: 'Valueof of A'
        },
        {
            fieldA: 'Valueof of B'
        },
        {
            fieldA: 'Valueof of C'
        },
    ]

    result = a.where([
        {field: 'fieldA', operator: 'contains', value: "A"}
    ])
    expect(result).toEqual([
        {fieldA: 'Valueof of A'},
        {fieldA: 'Valueof of B'},
        {fieldA: 'Valueof of C'},
    ])

    result = a.where([
        {field: 'fieldA', operator: 'strictly-contains', value: "A"}
    ])
    expect(result).toEqual([
        {fieldA: 'Valueof of A'},
    ])

    result = a.where([
        {field: 'fieldA', operator: 'regex', value: /A/}
    ])
    expect(result).toEqual([
        {fieldA: 'Valueof of A'},
    ])

    result = a.where([
        {field: 'fieldA', operator: 'custom', value: 'Valueof of A' , test: (item: typeof a, search: any) => {
                return item.fieldA === search
            }}
    ])
    expect(result).toEqual([
        {fieldA: 'Valueof of A'},
    ])

    result = a.where([
        {field: 'fieldA', operator: 'custom'}
    ])
    expect(result).toEqual([])

    result = a.where([
        {field: 'fieldA', operator: 'fake_operator'}
    ])
    expect(result).toEqual([])

    result = a.where([])
    expect(result).toEqual([
        {fieldA: 'Valueof of A'},
        {fieldA: 'Valueof of B'},
        {fieldA: 'Valueof of C'},
    ])

    a = [
        {
            fieldA: "Y"
        },
        {
            fieldA: true
        },
        {
            fieldA: "N"
        },
    ]

    result = a.where([
        {field: 'fieldA', operator: 'boolean-==', value: true},
    ])
    expect(result).toEqual([
        {fieldA: "Y"},
        {fieldA: true},
    ])

    result = a.where([
        {field: 'fieldA', operator: 'boolean-!=', value: true},
    ])
    expect(result).toEqual([
        {fieldA: "N"},
    ])
})

it('Array.prototype.orWhere', async () => {
    let a = [
        {
            fieldA: 19
        },
        {
            fieldA: 20
        },
        {
            fieldA: 21
        },
    ]

    let result = a.orWhere([
        {field: 'fieldA', operator: '>', value: 20},
        {field: 'fieldA', operator: 'number->', value: 20},
        {field: 'fieldA', operator: '<=', value: 19},
        {field: 'fieldA', operator: 'number-<=', value: 19},
    ])
    expect(result).toEqual([
        {fieldA: 19},
        {fieldA: 21}
    ])
})