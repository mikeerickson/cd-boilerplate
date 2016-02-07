export default class Calculator {

	constructor(base = null) {
		this._total = base
	}

	add(value) {
		this._total += value
		return this
	}

	subtract(value) {
		this._total -= value
		return this
	}

	multiply(value) {
		this._total = this._total * value
		return this
	}

	divide(value) {
		this._total = this._total / value
		return
	}

	reset() {
		this._total = 0
	}

	total() {
		return this._total
	}

}
