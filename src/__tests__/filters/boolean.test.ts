import {expect, it} from "@jest/globals";
import {BooleanEqualFilter, BooleanNotEqualFilter} from "../../src/filters";
import {Clause} from "../../src/types";

it('Filters : BooleanEqualFilter', async () => {
    let filter = new BooleanEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: true
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = true;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'Y';
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'y';
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 0;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = false;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'N';
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'n';
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : BooleanNotEqualFilter', async () => {
    let filter = new BooleanNotEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: true
    }

    let item: T = { fieldA: null };

    item.fieldA = 1;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = true;
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'Y';
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 'y';
    expect(filter.assert(clause, item)).toBe(false);

    item.fieldA = 0;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = false;
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'N';
    expect(filter.assert(clause, item)).toBe(true);

    item.fieldA = 'n';
    expect(filter.assert(clause, item)).toBe(true);
})