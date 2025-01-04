import {Filter} from "./base";
import {Clause} from "../types";

export abstract class BooleanFilter extends Filter {
    public static trueValues = [
        'y',
        'yes',
        'o',
        'oui',
        '1',
        'true'
    ]

    public static falseValues = [
        'n',
        'no',
        'non',
        '0',
        'false'
    ]

    toBoolean = (value: any) : boolean | null => {
        let trueValues = BooleanFilter
            .trueValues
            .map(v => v.toLowerCase())
        let falseValues = BooleanFilter
            .falseValues
            .map(v => v.toLowerCase())

        if (value === null || value === undefined) {
            value = '';
        }

        if (
            trueValues.indexOf(value.toString().toLowerCase()) !== -1 ||
            falseValues.indexOf(value.toString().toLowerCase()) !== -1
        ) {
            return BooleanFilter
                .trueValues
                .map(v => v.toLowerCase())
                .indexOf(value.toString().toLowerCase()) !== -1;
        }
        return null;
    }
}

export class BooleanEqualFilter extends BooleanFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (this.toBoolean(value) === null) {
            return false;
        }
        return this.toBoolean(value) === this.toBoolean(clause.value);
    }
}

export class BooleanNotEqualFilter extends BooleanFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        if (this.toBoolean(value) === null) {
            return false;
        }
        return this.toBoolean(value) !== this.toBoolean(clause.value);
    }
}