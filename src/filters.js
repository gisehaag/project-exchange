import numeral from 'numeral';
import { } from 'numeral/locales/es';

numeral.locale('es');

const dollarFilter = function (value) {
	if (!value) {
		return `$ 0`
	}

	return numeral(parseFloat(value)).format('($ 0,0.00)')
}

const kSeparatorFilter = function (value) {
	if (!value) {
		return `0`
	}

	return numeral(parseFloat(value)).format('(0,0.00)')
}

const kDollarFilter = function (value) {
	if (!value) {
		return `$ 0`
	}
	return numeral(parseFloat(value)).format('($ 0.00 a)')
}

const percentFilter = function (value) {
	if (!value) {
		return `0 %`
	}

	return `${Number(value).toFixed(2)}%`;
}


export { dollarFilter, kDollarFilter, percentFilter, kSeparatorFilter }