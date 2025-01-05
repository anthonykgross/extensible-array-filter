import {expect, it} from "@jest/globals";
import {
    Clause,
    DateEqualFilter,
    DateGteFilter,
    DateGtFilter,
    DateLteFilter,
    DateLtFilter,
    DateNotEqualFilter
} from "../../src";

it('Filters : DateLtFilter', async () => {
    let filter = new DateLtFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: new Date(2023, 9, 10)
    }

    let item: T = { fieldA: null };

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : DateLteFilter', async () => {
    let filter = new DateLteFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: new Date(2023, 9, 10)
    }

    let item: T = { fieldA: null };

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : DateGtFilter', async () => {
    let filter = new DateGtFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: new Date(2023, 9, 10)
    }

    let item: T = { fieldA: null };

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : DateGteFilter', async () => {
    let filter = new DateGteFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: new Date(2023, 9, 10)
    }

    let item: T = { fieldA: null };

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : DateEqualFilter', async () => {
    let filter = new DateEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: new Date(2023, 9, 10)
    }

    let item: T = { fieldA: null };

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : DateNotEqualFilter', async () => {
    let filter = new DateNotEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: new Date(2023, 9, 10)
    }

    let item: T = { fieldA: null };

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);
})
