export abstract class Validator {
    abstract validate: (field: any, item: any, search: any) => boolean
}