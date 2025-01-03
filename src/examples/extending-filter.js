"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var extensible_array_filter_1 = require("@anthonykgross/extensible-array-filter");
var MyFilter = /** @class */ (function (_super) {
    __extends(MyFilter, _super);
    function MyFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.assert = function (clause, item) {
            var value = item[clause.field];
            return typeof value === 'string' && new RegExp(clause.value, "gi").test(value);
        };
        return _this;
    }
    return MyFilter;
}(extensible_array_filter_1.StringFilter));
var filters = __assign(__assign({}, extensible_array_filter_1.getDefaultFilters), { 'my-operator': MyFilter });
var rows = [
    { id: 1, name: 'Example 1' },
    { id: 2, name: 'Example 2' },
    { id: 3, name: 'Example 3' },
];
var result = rows.where([
    { field: 'id', operator: 'my-operator', value: 1 },
], filters);
console.log(result);
