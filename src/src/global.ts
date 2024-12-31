import {Clause, Filters, getDefaultFilters} from "./types";

export {};

declare global {
    interface Array<T> {
        where(clauses: Clause<T>[], filters?: Filters): T[];
        orWhere(clauses: Clause<T>[], filters?: Filters): T[];
    }
}

const isFiltered = function <T>(item: T, clause: Clause<T>, filters?: Filters): boolean {
    let fs = filters || getDefaultFilters;

    if (Object.keys(fs).indexOf(clause.operator) !== -1) {
        let f = fs[clause.operator];
        let o = new f()
        return o.assert(clause, item)
    }
    return false;
}

Array.prototype.where = function <T>(clauses: Clause<T>[], filters?: Filters): T[] {
    const items = this as T[];

    return items.filter((item: T) => {
        return clauses.every((clause: Clause<T>) => isFiltered(item, clause, filters));
    });
};

Array.prototype.orWhere = function <T>(clauses: Clause<T>[], filters?: Filters): T[] {
    const items = this as T[];

    return items.filter((item: T) => {
        return clauses.some((clause: Clause<T>) => isFiltered(item, clause, filters));
    });
};