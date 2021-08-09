import {searchIn2DArray} from './searchIn2DArray';
import {describe, it} from 'mocha';
import {expect} from 'chai';

const Array2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
describe('search in 2d array', () => {
    it('Methods1' , () => {
        expect(searchIn2DArray(Array2D, 3)).to.equal(true);
        expect(searchIn2DArray(Array2D, 5)).to.equal(true);
        expect(searchIn2DArray(Array2D, 7)).to.equal(true);
        expect(searchIn2DArray(Array2D, 10)).to.equal(false);
    });
});