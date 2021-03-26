import { Guard } from './guard';

export interface RotorConfiguration {
    leftSide: string;
    rightSide: string;
    turnoverAt: string;
}

export class Rotor {
    constructor({ leftSide, rightSide, turnoverAt }: RotorConfiguration) {
        Guard.notEmpty(leftSide, 'Left side alphabet not specified');
        Guard.sameArraysIgnoreOrder(leftSide.split(''), rightSide.split(''), 'Alphabets have to have same letters');
        Guard.notEmpty(turnoverAt, 'Turnover position not specified');
        Guard.areEqual(turnoverAt.length, 1, 'Turnover position should be exactly one character');
        Guard.contains(rightSide, turnoverAt, 'Turnover position not found in right-side alphabet');
    }
}
