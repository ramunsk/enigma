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
            expect(() => Guard.notEmpty('test', 'Cannot be empty string')).not.toThrow();
        });
    });
});
