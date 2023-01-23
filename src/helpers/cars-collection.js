"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
class CarsCollection {
    constructor(props) {
        this.joinCar = (_a) => {
            var _b, _c;
            var { modelId } = _a, car = __rest(_a, ["modelId"]);
            const { brands, models } = this.props;
            const carModel = models.find((model) => model.id === modelId);
            const carBrand = brands.find((brand) => brand.id === (carModel === null || carModel === void 0 ? void 0 : carModel.brandId));
            return Object.assign(Object.assign({}, car), { modelId, brand: (_b = (carBrand && carBrand.title)) !== null && _b !== void 0 ? _b : 'unknown', model: (_c = (carModel && carModel.title)) !== null && _c !== void 0 ? _c : 'unknown' });
        };
        this.props = props;
    }
    get all() {
        return this.props.cars.map(this.joinCar.bind(this));
    }
}
exports.default = CarsCollection;
