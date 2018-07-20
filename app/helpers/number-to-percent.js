import { helper } from '@ember/component/helper';

export function numberToPercent(params /*, hash*/ ) {
	if (isNaN(params)) {
		return params;
	} else {
		return ((parseFloat(params) * 100).toFixed(0)).toString()
	}
}

export default helper(numberToPercent);