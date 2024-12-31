import {expect, it} from "@jest/globals";
import {
    Clause,
    CustomFilter,
    EqualFilter,
    GteFilter,
    GtFilter,
    LteFilter,
    LtFilter,
    NotEqualFilter
} from "../../src";

it('Filters : LtFilter', async () => {
    let filter = new LtFilter();

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

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = new Date(2023, 9, 10);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'my_string_value';
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : LteFilter', async () => {
    let filter = new LteFilter();

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

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = new Date(2023, 9, 10);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'my_string_value';
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : GtFilter', async () => {
    let filter = new GtFilter();

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

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = new Date(2023, 9, 10);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'my_string_value';
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : GteFilter', async () => {
    let filter = new GteFilter();

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

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = new Date(2023, 9, 10);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'my_string_value';
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : EqualFilter', async () => {
    let filter = new EqualFilter();

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

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = new Date(2023, 9, 10);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'my_string_value';
    expect(filter.assert(clause, item)).toBe(false);
})


it('Filters : NotEqualFilter', async () => {
    let filter = new NotEqualFilter();

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

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = new Date(2023, 9, 10);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'my_string_value';
    expect(filter.assert(clause, item)).toBe(true);
})

it('Filters : CustomFilter', async () => {
    let filter = new CustomFilter();

    interface T {
        fieldA: any;
    }

    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: "my_specific_value",
        test: (item: T, search) => {
            return item.fieldA === search
        }
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = -10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 10;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 100;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = null;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2022, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2023, 9, 10);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = new Date(2024, 9, 9);
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'my_specific_value';
    expect(filter.assert(clause, item)).toBe(true);

    clause.test = undefined;
    item.fieldA = 'my_specific_value';
    expect(filter.assert(clause, item)).toBe(false);
})