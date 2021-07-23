import romanToInt from './romanToInt';

import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('My math library', () => {

    it('roman to number III' , () => {
        expect(romanToInt("III")).to.equal(3);
        expect(romanToInt("IV")).to.equal(4);
        expect(romanToInt("IX")).to.equal(9);
        expect(romanToInt("LVIII")).to.equal(58);
        expect(romanToInt("MCMXCIV")).to.equal(1994);
    });

});