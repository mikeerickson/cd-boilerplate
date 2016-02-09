
/*global describe*/
/*global it*/

/*
 $ mocha --compilers js:babel-core/register specs
 * - or -
 * npm tests
 */

import chai from 'chai'

let expect = chai.expect
let should = chai.should()

describe('Mocha Basic ES6 Test', function() {

	it('expect it to pass', (done) => {
		expect(true).to.be.true
		done()
	})

	it('should perform some math operations', (done) => {
		let value = 22
		value.should.be.ok
		value.should.equal(22)
		done()
	})

	it('expect it to be a string', () => {
		expect('test').to.be.a('string')
	})

	it('should not be ok', (done) =>{
		false.should.not.be.ok
		done()
	})

});

