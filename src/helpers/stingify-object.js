"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringifyProps = (object) => {
    const objectLikeArray = Object.entries(object);
    const objectWithPropsStringified = objectLikeArray
        .reduce((prevObj, [key, value]) => (Object.assign(Object.assign({}, prevObj), { [key]: String(value) })), {});
    return objectWithPropsStringified;
};
exports.default = stringifyProps;
