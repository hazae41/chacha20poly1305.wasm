let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_0.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

const ChaCha20CipherFinalization = true
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_chacha20cipher_free(ptr >>> 0, 1));

export class ChaCha20Cipher {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ChaCha20CipherFinalization;
        return ptr;
    }

    [Symbol.dispose]() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_chacha20cipher_free(ptr, 0);
    }
    /**
     * @param {Memory} key
     * @param {Memory} nonce
     */
    constructor(key, nonce) {
        _assertClass(key, Memory);
        _assertClass(nonce, Memory);
        const ret = wasm.chacha20cipher_new(key.__wbg_ptr, nonce.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        ChaCha20CipherFinalization;
        return this;
    }
    /**
     * @param {number} position
     */
    seek(position) {
        const ret = wasm.chacha20cipher_seek(this.__wbg_ptr, position);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Memory} memory
     */
    apply_keystream(memory) {
        _assertClass(memory, Memory);
        const ret = wasm.chacha20cipher_apply_keystream(this.__wbg_ptr, memory.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
}

const ChaCha20Poly1305CipherFinalization = true
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_chacha20poly1305cipher_free(ptr >>> 0, 1));

export class ChaCha20Poly1305Cipher {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ChaCha20Poly1305CipherFinalization;
        return ptr;
    }

    [Symbol.dispose]() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_chacha20poly1305cipher_free(ptr, 0);
    }
    /**
     * @param {Memory} key
     */
    constructor(key) {
        _assertClass(key, Memory);
        const ret = wasm.chacha20poly1305cipher_new(key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        ChaCha20Poly1305CipherFinalization;
        return this;
    }
    /**
     * @param {Memory} message
     * @param {Memory} nonce
     * @returns {Memory}
     */
    encrypt(message, nonce) {
        _assertClass(message, Memory);
        _assertClass(nonce, Memory);
        const ret = wasm.chacha20poly1305cipher_encrypt(this.__wbg_ptr, message.__wbg_ptr, nonce.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return Memory.__wrap(ret[0]);
    }
    /**
     * @param {Memory} message
     * @param {Memory} nonce
     * @returns {Memory}
     */
    decrypt(message, nonce) {
        _assertClass(message, Memory);
        _assertClass(nonce, Memory);
        const ret = wasm.chacha20poly1305cipher_decrypt(this.__wbg_ptr, message.__wbg_ptr, nonce.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return Memory.__wrap(ret[0]);
    }
}

const MemoryFinalization = true
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_memory_free(ptr >>> 0, 1));

export class Memory {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Memory.prototype);
        obj.__wbg_ptr = ptr;
        MemoryFinalization;
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        this.__wbg_ptr0 = 0;
        this.__wbg_len0 = 0;
        MemoryFinalization;
        return ptr;
    }

    [Symbol.dispose]() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_memory_free(ptr, 0);
    }
    /**
    * @param {Uint8Array} inner
    */
    constructor(inner) {
        const ptr0 = passArray8ToWasm0(inner, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.memory_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        this.__wbg_ptr0 = ptr0 >>> 0;
        this.__wbg_len0 = len0 >>> 0;
        MemoryFinalization;
        return this;
    }
    /**
    * @returns {number}
    */
    ptr() {
        const ret = wasm.memory_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    len() {
        const ret = wasm.memory_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get ptr0() {
        return this.__wbg_ptr0 ??= this.ptr();
    }
    /**
    * @returns {number}
    */
    get len0() {
        return this.__wbg_len0 ??= this.len();
    }
    /**
    * @returns {Uint8Array}
    */
    get bytes() {
        return getUint8ArrayMemory0().subarray(this.ptr0, this.ptr0 + this.len0);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_export_0;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        throw new Error();
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
