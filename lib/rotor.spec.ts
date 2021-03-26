import { Rotor, RotorConfiguration } from './rotor';

describe('Rotor', () => {
    describe('when creating should', () => {
        it('throw error if left side alphabet is not provided', () => {
            const rotorConfig: RotorConfiguration = {
                leftSide: '',
            };
            expect(() => new Rotor(rotorConfig)).toThrowError();
        });
    });
});
