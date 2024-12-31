import {Clause} from "../types";

export abstract class Filter {
    abstract assert: (clause: Clause<any>, item: any) => boolean
}