import { Guard } from './guard';

describe('Guard', () => {
    describe('[require] should', () => {
        it('throw when argument is undefined', () => {
            expect(() => Guard.require(undefined, 'Cannot be undefined')).toThrow('Cannot be undefined');
        });

        it('throw when argument is null', () => {
            expect(() => Guard.require(null, 'Cannot be null')).toThrow('Cannot be null');
        });

        it('not throw when argument has value', () => {
            expect(() => Guard.require(123, 'Cannot be null')).not.toThrow();
        });
    });

    describe('[notEmpty] should', () => {
        it('throw error when argument is undefined', () => {
            // @ts-ignore
            expect(() => Guard.notEmpty(undefined, 'Cannot be empty string')).toThrow('Cannot be empty string');
        });

        it('throw error when argument is null', () => {
            // @ts-ignore
            expect(() => Guard.notEmpty(null, 'Cannot be empty string')).toThrow('Cannot be empty string');
        });

        it('throw error when argument is empty string', () => {
            expect(() => Guard.notEmpty('', 'Cannot be empty string')).toThrow('Cannot be empty string');
        });

        it('not throw error when argument is not empty string', () => {
            expect(() => Guard.notEmpty('test string', 'Cannot be empty string')).not.toThrow();
        });
    });

    describe('[areEqual] should', () => {
        it('throw error when arguments are not equal', () => {
            expect(() => Guard.areEqual(undefined, 1, 'Not equal')).toThrow('Not equal');
            expect(() => Guard.areEqual(1, null, 'Not equal')).toThrow('Not equal');
            expect(() => Guard.areEqual(undefined, null, 'Not equal')).toThrow('Not equal');
        });

        it('not throw error when arguments are equal', () => {
            expect(() => Guard.areEqual(1, 1, 'Not equal')).not.toThrow();
            expect(() => Guard.areEqual(null, null, 'Not equal')).not.toThrow();
            expect(() => Guard.areEqual(undefined, undefined, 'Not equal')).not.toThrow();
        });
    });

    describe('[sameArraysIgnoreOrder] should', () => {
        it('throw if array lengths do not match', () => {
            // @ts-ignore
            expect(() => Guard.sameArraysIgnoreOrder([1], undefined, 'Not same')).toThrow('Not same');
            // @ts-ignore
            expect(() => Guard.sameArraysIgnoreOrder([1], null, 'Not same')).toThrow('Not same');
            expect(() => Guard.sameArraysIgnoreOrder([1], [1, 2], 'Not same')).toThrow('Not same');
        });

        it('throw if arrays have different members', () => {
            expect(() => Guard.sameArraysIgnoreOrder([1], [2], 'Not same')).toThrow('Not same');
        });

        it('not throw if arrays have same members in different order', () => {
            expect(() => Guard.sameArraysIgnoreOrder([1, 2, 3], [2, 3, 1], 'Not same')).not.toThrow();
        });
    });

    describe('[contains] should', () => {
        it('throw if array is undefined', () => {
            // @ts-ignore
            expect(() => Guard.contains(undefined, undefined, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains(undefined, 1, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains(undefined, 'a', 'Does not contain')).toThrow('Does not contain');
        });

        it('throw if array is null', () => {
            // @ts-ignore
            expect(() => Guard.contains(null, undefined, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains(null, 1, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains(null, 'a', 'Does not contain')).toThrow('Does not contain');
        });

        it('throw if array is empty', () => {
            // @ts-ignore
            expect(() => Guard.contains([], undefined, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains([], 1, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains([], 'a', 'Does not contain')).toThrow('Does not contain');
        });

        it('throw if string is empty', () => {
            // @ts-ignore
            expect(() => Guard.contains('', undefined, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains('', 1, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains('', 'a', 'Does not contain')).toThrow('Does not contain');
        });

        it('throw if array does not contain item', () => {
            // @ts-ignore
            expect(() => Guard.contains([1], undefined, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains([2], 1, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains([3], 'a', 'Does not contain')).toThrow('Does not contain');
        });

        it('throw if string does not contain letter', () => {
            // @ts-ignore
            expect(() => Guard.contains('abc', undefined, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains('abc', 1, 'Does not contain')).toThrow('Does not contain');
            // @ts-ignore
            expect(() => Guard.contains('abc', 'd', 'Does not contain')).toThrow('Does not contain');
        });

        it('not throw if array contains item', () => {
            // @ts-ignore
            expect(() => Guard.contains(['a', 'b', 'c'], 'a', 'Does not contain')).not.toThrow();
            // @ts-ignore
            expect(() => Guard.contains(['a', 'b', 'c'], 'b', 'Does not contain')).not.toThrow();
            // @ts-ignore
            expect(() => Guard.contains(['a', 'b', 'c'], 'c', 'Does not contain')).not.toThrow();
        });

        it('not throw if string contains letter', () => {
            // @ts-ignore
            expect(() => Guard.contains('abc', 'a', 'Does not contain')).not.toThrow();
            // @ts-ignore
            expect(() => Guard.contains('abc', 'b', 'Does not contain')).not.toThrow();
            // @ts-ignore
            expect(() => Guard.contains('abc', 'c', 'Does not contain')).not.toThrow();
        });
    });
});
