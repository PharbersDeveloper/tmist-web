import { helper } from '@ember/component/helper';

export function floatToPercent(params/*, hash*/) {
    if (isNaN(params)) {
        // throw new TypeError("num is not a number");
        // console.warn("input is not a number")
        return params;
    } else {
        return (params*100).toFixed(0);
    }
}

export default helper(floatToPercent);
