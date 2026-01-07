import { getBuffer } from '../js/getBuffer';

test('getBuffer should create valid ArrayBuffer with correct size and content', () => {
    const expectedData = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = getBuffer();

    // Проверка, что возвращается правильный тип данных
    expect(buffer).toBeInstanceOf(ArrayBuffer);

    // Размер буфера равен длине строки умноженной на 2 (каждый символ занимает 2 байта в UTF-16)
    expect(buffer.byteLength).toEqual(expectedData.length * 2);

    // Читаем содержимое буфера и сравниваем с ожидаемой строкой
    const decoder = new TextDecoder('utf-16');
    const actualData = decoder.decode(buffer);
    expect(actualData).toEqual(expectedData);
});