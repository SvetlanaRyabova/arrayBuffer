class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
  }

  load() {
    const buffer = new ArrayBuffer(this.data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < this.data.length; i++) {
      bufferView[i] = this.data.charCodeAt(i);
    }
    return bufferView;
  }

  toString() {
    const bufferView = new Uint16Array(this.load());
    let str = '';
    for (let i = 0; i < bufferView.length; i++) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str;
  }
}

// const arrayBufferConverter = new ArrayBufferConverter('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
// console.log(arrayBufferConverter.load());
// console.log(Array.from(arrayBufferConverter.load()))
// console.log(arrayBufferConverter.toString());
export default ArrayBufferConverter;
