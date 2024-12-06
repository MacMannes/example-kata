import { describe, expect, it } from 'vitest';
import { ExampleKata } from './example-kata';

describe('Example Kata', () => {
    it('Creating an instance of the ExampleKata class should work', () => {
        const clazz = new ExampleKata();
        expect(clazz).toBeDefined();
    });
});
