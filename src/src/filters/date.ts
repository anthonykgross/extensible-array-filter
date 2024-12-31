import {Validator} from "./base";

export class DateLtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value < new Date(Date.parse(search))
    }
}

export class DateLteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value <= new Date(Date.parse(search))
    }
}

export class DateGtValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value > new Date(Date.parse(search))
    }
}

export class DateGteValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value >= new Date(Date.parse(search))
    }
}

export class DateEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value.getTime() === new Date(Date.parse(search)).getTime()
    }
}

export class DateNotEqualValidator extends Validator {
    validate = (field: any, item: any, search: any) => {
        let value = item[field]
        return value instanceof Date && value.getTime() !== new Date(Date.parse(search)).getTime()
    }
}
