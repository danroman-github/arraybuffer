export default class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }

    load(buffer) {
        if (!(buffer instanceof ArrayBuffer)) throw new Error('Invalid argument type');
        this.buffer = buffer;
    }

    toString() {
        if (!this.buffer) throw new Error('No buffer loaded');

        const decoder = new TextDecoder('utf-16');
        return decoder.decode(this.buffer);
    }
}
