import {CipherCCM, DecipherCCM, HexBase64BinaryEncoding, Utf8AsciiBinaryEncoding} from "crypto";
import crypto from 'crypto'

export class Coder {

    private readonly algorithm = 'chacha20-poly1305';
    private iv = Buffer.alloc(12, 0);
    private cipher: CipherCCM;
    private decipher: DecipherCCM;

    constructor(private password: string,
                private textCoding: Utf8AsciiBinaryEncoding = 'utf8',
                private cipherCoding: HexBase64BinaryEncoding = 'hex') {
        this.cipher = crypto.createCipheriv(this.algorithm, this.password, this.iv, {authTagLength: 16});
        this.decipher = crypto.createDecipheriv(this.algorithm, this.password, this.iv, {authTagLength: 16});
    }

    public encode(data: string) {
        return this.cipher.update(data, this.textCoding, this.cipherCoding);
    }

    public decode(cipher: string) {
        return this.decipher.update(cipher, this.cipherCoding, this.textCoding)
    }
}
