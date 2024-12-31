import {expect, it} from "@jest/globals";
import {
    Clause,
    RegexFilter,
    StringContainsFilter,
    StringEqualFilter,
    StringGteFilter,
    StringGtFilter,
    StringLteFilter,
    StringLtFilter,
    StringNotEqualFilter,
    StringStrictlyContainsFilter
} from "../../src";

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

it('Filters : StringLteFilter', async () => {
    let filter = new StringLteFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Mz';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'My';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'Mu';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = null;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'o';
    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : StringLtFilter', async () => {
    let filter = new StringLtFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Mz';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'My';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'Mu';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = null;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'o';
    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : StringGteFilter', async () => {
    let filter = new StringGteFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Mz';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'My';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'Mu';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = null;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'o';
    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : StringGtFilter', async () => {
    let filter = new StringGtFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Mz';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'My';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'Mu';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = null;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'o';
    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : StringEqualFilter', async () => {
    let filter = new StringEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Mz';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'My';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'Mu';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = null;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = undefined;
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'o';
    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(false);
})

it('Filters : StringNotEqualFilter', async () => {
    let filter = new StringNotEqualFilter();

    interface T {
        fieldA: any;
    }
    let clause: Clause<T> = {
        field: 'fieldA',
        operator: '',
        value: null
    }

    let item: T = { fieldA: 'My Cat\'s name is blu3ïe.' };

    clause.value = 'Mz';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'My';
    expect(filter.assert(clause, item)).toBe(false);

    clause.value = 'Mu';
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = null;
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = undefined;
    expect(filter.assert(clause, item)).toBe(true);

    clause.value = 'o';
    item.fieldA = undefined;
    expect(filter.assert(clause, item)).toBe(true);
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