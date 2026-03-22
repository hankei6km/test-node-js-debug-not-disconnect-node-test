import { describe, it } from 'node:test';
import assert from 'node:assert';
import { func1 } from './mod1.js';

describe('func1', () => {
    it('should add two numbers', () => {
        assert.strictEqual(func1(2, 3), 5);
    });
});