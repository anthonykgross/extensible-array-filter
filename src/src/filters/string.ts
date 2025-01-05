import {Filter} from "./base";
import {Clause} from "../types";

export abstract class StringFilter extends Filter {

}

export class StringContainsFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && new RegExp(clause.value, "gi").test(value)
    }
}

export class StringStrictlyContainsFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && value.includes(clause.value)
    }
}

export class RegexFilter extends StringFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]
        return typeof value === 'string' && new RegExp(clause.value).test(value)
    }
}

export abstract class StringComparisonFilter extends StringFilter {
    getFirstDiffIndex = (clauseValue?: string, itemValue?: string) => {
        if (!clauseValue || !itemValue) {
            return null
        }

        //Remove all special chars
        clauseValue = clauseValue.toString().replace(/[^\w\s]/gi, '')
        itemValue = itemValue.toString().replace(/[^\w\s]/gi, '')

        // Convert string to array
        let clauseChars = [...clauseValue];
        let itemChars = [...itemValue];

        // Find the first diff char
        let index = clauseChars.findIndex((char, i) => char !== itemChars[i]);

        // if not found, we take the last char index from Clause value.
        if (index === -1) {
            index = clauseChars.length -1;
        }
        return index;
    }
}


export class StringLteFilter extends StringComparisonFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (typeof value === 'string') {
            let index = this.getFirstDiffIndex(clause.value, value)
            if (index === null) {
                return false;
            }
            return value.charCodeAt(index) <= clause.value.toString().charCodeAt(index);
        }
        return false;
    }
}

export class StringLtFilter extends StringComparisonFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (typeof value === 'string') {
            let index = this.getFirstDiffIndex(clause.value, value)
            if (index === null) {
                return false;
            }
            return value.charCodeAt(index) < clause.value.toString().charCodeAt(index);
        }
        return false;
    }
}

export class StringGteFilter extends StringComparisonFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (typeof value === 'string') {
            let index = this.getFirstDiffIndex(clause.value, value)
            if (index === null) {
                return false;
            }
            return value.charCodeAt(index) >= clause.value.toString().charCodeAt(index);
        }
        return false;
    }
}

export class StringGtFilter extends StringComparisonFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (typeof value === 'string') {
            let index = this.getFirstDiffIndex(clause.value, value)
            if (index === null) {
                return false;
            }
            return value.charCodeAt(index) > clause.value.toString().charCodeAt(index);
        }
        return false;
    }
}

export class StringEqualFilter extends StringComparisonFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (typeof value === 'string') {
            let index = this.getFirstDiffIndex(clause.value, value)
            if (index === null) {
                return false;
            }
            return value.charCodeAt(index) == clause.value.toString().charCodeAt(index);
        }
        return false;
    }
}

export class StringNotEqualFilter extends StringComparisonFilter {
    assert = (clause: Clause<any>, item: any) => {
        let value = item[clause.field]

        if (typeof value === 'string') {
            let index = this.getFirstDiffIndex(clause.value, value)
            if (index === null) {
                return true;
            }
            return value.charCodeAt(index) !== clause.value.toString().charCodeAt(index);
        }
        return true;
    }
}