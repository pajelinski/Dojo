import {expect} from 'chai'
import {add} from "../src/string_calculator"

describe('string_calculator', () => {
    describe('given empty string', () => {
        it('should return 0', () => {
            expect(add("")).to.be.equal(0);
        });
    });

    describe('given string with single number', () => {
        it('should return given number', () => {
            expect(add("1")).to.be.equal(1);
        });
    });

    describe('given string with two numbers', () => {
        it('should return sum', () => {
            expect(add("1, 2")).to.be.equal(3);
        });
    });

    describe('given string with many numbers', () => {
        it('should return sum', () => {
            expect(add("1, 2, 3, 4")).to.be.equal(10);
        });

        describe('given string has two lines', () => {
            it('should return sum', () => {
                expect(add("1,\n 2, 3, 4")).to.be.equal(10);
            });
        });

        describe('given string with new delimiter', () => {
            it('should return sum', () => {
                expect(add("//;\n1; 2; 3; 4")).to.be.equal(10);
            });
        });
    });
    
});