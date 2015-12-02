/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */

function compute (value) {
	return typeof value === "function" ? value() : value;
}

function computeObject (object) {
	let mapped = {};

	Object.keys(object).forEach((key) => {
		const value = object[key];

		mapped[key] = typeof value === "object" ? computeObject(value) : compute(value);
	});

	return mapped;
}

module.exports = {
	compute,
	computeObject
};
