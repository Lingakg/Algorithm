import fib from './fib';
import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('Fibonacci sequence', () => {
    it('Methods1' , () => {
        expect(fib(0)).to.equal(0);
        expect(fib(1)).to.equal(1);
        expect(fib(2)).to.equal(1);
        expect(fib(10)).to.equal(55);
        expect(fib(20)).to.equal(6765);
        expect(fib(100)).to.equal(354224848179262000000);
    });
});