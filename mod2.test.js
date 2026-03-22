import { describe, it } from 'node:test';
import assert from 'node:assert';
import { func2 } from './mod2.js';

describe('func2', () => {
    it('should subtract two numbers', () => {
        assert.strictEqual(func2(5, 3), 2);
    });
});