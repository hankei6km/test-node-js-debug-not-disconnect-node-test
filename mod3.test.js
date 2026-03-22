import { describe, it } from 'node:test';
import assert from 'node:assert';
import { func3 } from './mod3.js';

describe('func3', () => {
    it('should multiply two numbers', () => {
        assert.strictEqual(func3(2, 3), 6);
    });
});