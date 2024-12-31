import {expect, it} from "@jest/globals";
import {RegexFilter, StringContainsFilter, StringStrictlyContainsFilter} from "../../src/filters";
import {Clause} from "../../src/types";

it('Filters : StringContainsFilter', async () => {
    let filter = new StringContainsFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'cat\'s';
    expect(filter.assert(clause, item)).toBe(true);

    // @todo should be true
    clause.value = 'blu3ie';
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : StringContainsFilter', async () => {
    let filter = new StringStrictlyContainsFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Cat\'s';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'blu3ïe';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'blu3ie';
    expect(filter.assert(clause, item)).toBe(false);
})


it('Filters : RegexFilter', async () => {
    let filter = new RegexFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = /cat/gi;
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = /3/;
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = /blu3ie/;
    expect(filter.assert(clause, item)).toBe(false);
})