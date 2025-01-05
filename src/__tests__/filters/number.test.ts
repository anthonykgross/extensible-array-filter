import {expect, it} from "@jest/globals";
import {
    Clause,
    NumberEqualFilter,
    NumberGteFilter,
    NumberGtFilter,
    NumberLteFilter,
    NumberLtFilter,
    NumberNotEqualFilter
} from "../../src";

it('Filters : NumberLtFilter', async () => {
    let filter = new NumberLtFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: 10
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : NumberLteFilter', async () => {
    let filter = new NumberLteFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: 10
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : NumberGtFilter', async () => {
    let filter = new NumberGtFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: 10
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : NumberGteFilter', async () => {
    let filter = new NumberGteFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: 10
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : NumberEqualFilter', async () => {
    let filter = new NumberEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: 10
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : NumberNotEqualFilter', async () => {
    let filter = new NumberNotEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: 10
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(true);
})