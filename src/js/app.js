import ArrayBufferConverter from './arrayBufferConverter';
import { getBuffer } from './getBuffer';

const buffer = getBuffer();
const converter = new ArrayBufferConverter();

try {
    converter.load(buffer);

    const convertedData = converter.toString();

    console.log('Преобразованные данные:', convertedData);
} catch (error) {
    console.error('Ошибка:', error.message);
}