import ArrayBufferConverter from '../js/arrayBufferConverter';
import { getBuffer } from '../js/getBuffer';

describe('ArrayBufferConverter', () => {
    test('should convert array buffer to string correctly', () => {
        const converter = new ArrayBufferConverter();
        const buffer = getBuffer();
        converter.load(buffer);

        const decoder = new TextDecoder('utf-16');
        const rawData = decoder.decode(buffer);

        expect(rawData).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });

    test('throws error when loading invalid buffer', () => {
        const converter = new ArrayBufferConverter();
        expect(() => converter.load({})).toThrow('Invalid argument type');
    });

    test('throws error when calling toString without loading a buffer first', () => {
        const converter = new ArrayBufferConverter();
        expect(() => converter.toString()).toThrow('No buffer loaded');
    });

    test('correctly converts different characters', () => {
        const converter = new ArrayBufferConverter();
        const buffer = getBuffer();
        converter.load(buffer);

        const rawData = converter.toString();
        expect(typeof rawData).toBe('string');
        expect(rawData).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });

    test('handles empty buffer gracefully', () => {
        const converter = new ArrayBufferConverter();
        const emptyBuffer = new ArrayBuffer(0);
        converter.load(emptyBuffer);

        const rawData = converter.toString();
        expect(rawData).toBe('');
    });
});