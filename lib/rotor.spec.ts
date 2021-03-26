import { Rotor, RotorConfiguration } from './rotor';

describe('Rotor', () => {
    describe('when creating should', () => {
        it('throw error if left side alphabet undefined', () => {
            const rotorConfig: RotorConfiguration = {
                // @ts-ignore
                leftSide: undefined,
                rightSide: '',
                turnoverAt: '',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if left side alphabet null', () => {
            const rotorConfig: RotorConfiguration = {
                // @ts-ignore
                leftSide: null,
                rightSide: '',
                turnoverAt: '',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if left side alphabet empty string', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: '',
                rightSide: '',
                turnoverAt: '',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if alphabets do not have same letters', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cwa',
                turnoverAt: 'a',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if alphabet lengths do not match', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cbaw',
                turnoverAt: 'w',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if turnover position is undefined', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cba',
                // @ts-ignore
                turnoverAt: undefined,
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if turnover position is null', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cba',
                // @ts-ignore
                turnoverAt: null,
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if turnover position is empty string', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cba',
                turnoverAt: '',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if turnover position is longer than one char', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cba',
                turnoverAt: 'abc',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('throw error if turnover position is not in right side alphabet', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cba',
                turnoverAt: 'd',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });

        it('not throw if configuration is correct', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: 'abc',
                rightSide: 'cba',
                turnoverAt: 'b',
            };
            expect(() => new Rotor(rotorConfig)).not.toThrowError();
        });
    });
});
