// CALCULATOR SPEC
// =============================================================================

/*global require*/
/*global describe*/
/*global it*/

import chai from 'chai'
import Calculator from '../src/Calculator'

let expect = chai.expect;
let should = chai.should();

describe('Calculator Spec', () => {
	let tape;

	beforeEach( () =>{
		tape = new Calculator(6)
	})

	it('should confirm `tape` contains defined initial value', (done) => {
		expect(tape.total()).to.equal(6)
		tape.total().should.be.truthy
		done()
	})

	it('should `add` a value', (done) => {
		let addValue = tape.add(2).total()
		expect(addValue).to.equal(8)
		addValue.should.be.truthy
		done()
	})

	it('should `subtract` a value', (done) => {
		let subValue = tape.subtract(4).total()
		expect(subValue).to.equal(2)
		subValue.should.not.be.falsy
		done()
	})

	it('should `multiply` a value', (done) => {
		let multiplyValue = tape.multiply(3).total()
		expect(multiplyValue).to.equal(18)
		multiplyValue.should.be.truthy
		done()
	})

	it('should `divide` a value', (done) => {
		let divideValue = tape.divide(3).total()
		expect(divideValue).to.equal(2)
		done()
	})

	it('should `reset` value', (done) => {
		let resetValue = tape.reset().total()
		expect(resetValue).to.equal(0)
		resetValue.should.not.be.falsy
		done()
	})

	it('should `test` total value', (done) => {
		let totalValue = tape.add(12).subtract(3).multiply(2).divide(15).total()
		expect(totalValue).to.equal(2)
		totalValue.should.be.truthy
		done()
	})



})
