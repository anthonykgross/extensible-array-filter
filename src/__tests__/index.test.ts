import {it, expect} from '@jest/globals';
import '../src';

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
        {field: 'fieldA', operator: '==', value: 20},
    ], [])
    expect(result).toEqual([])

    result = a.where([
        {field: 'fieldA', operator: 'invalid_operator', value: 20},
    ])
    expect(result).toEqual([])

    result = a.where([
        {field: 'fieldA', operator: '==', value: 20},
        {field: 'fieldA', operator: '==', value: 21},
    ])
    expect(result).toEqual([])

    result = a.where([
        {field: 'fieldA', operator: '==', value: 20},
    ])
    expect(result).toEqual([
        {fieldA: 20},
    ])
})

it('Array.prototype.orWhere', async () => {
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

    let result = a.orWhere([
        {field: 'fieldA', operator: '==', value: 20},
        {field: 'fieldA', operator: '==', value: 21},
    ], [])
    expect(result).toEqual([])

    result = a.orWhere([
        {field: 'fieldA', operator: 'invalid_operator', value: 20},
        {field: 'fieldA', operator: 'invalid_operator', value: 21},
    ])
    expect(result).toEqual([])

    result = a.orWhere([
        {field: 'fieldA', operator: '==', value: 20},
        {field: 'fieldA', operator: '==', value: 21},
    ])
    expect(result).toEqual([
        {fieldA: 20},
        {fieldA: 21},
    ])
})