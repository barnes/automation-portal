import { describe, it, expect } from 'vitest';

const value1: number = parseInt(process.env.value1 || '1');
const value2: number = parseInt(process.env.value2 || '2');
const sum = parseInt(process.env.sum || '3');

describe('sum test', () => {
	it(`adds ${value1} + ${value2} to equal ${sum}`, () => {
		expect(value1 + value2).toBe(sum);
	});
});
