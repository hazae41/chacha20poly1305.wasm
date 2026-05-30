import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

execSync("rustup target add wasm32-unknown-unknown", { stdio: "inherit" })

execSync("cargo install wasm-tools --version 1.250.0 --locked", { stdio: "inherit" })

execSync("cargo install wasm-bindgen-cli --version 0.2.100 --locked", { stdio: "inherit" })

execSync("cargo build --target wasm32-unknown-unknown --release --locked", { stdio: "inherit", cwd: "./src/wasm" })

execSync("wasm-bindgen --target web --out-dir ./out ./target/wasm32-unknown-unknown/release/daemon.wasm", { stdio: "inherit", cwd: "./src/wasm" })

execSync("wasm-tools strip --all ./out/daemon_bg.wasm -o ./out/daemon_bg.wasm", { stdio: "inherit", cwd: "./src/wasm" })

const wasm = readFileSync(`./src/wasm/out/daemon_bg.wasm`)

writeFileSync(`./src/wasm/out/daemon.wasm.js`, `export const data = "data:application/wasm;base64,${wasm.toBase64()}";`);
writeFileSync(`./src/wasm/out/daemon.wasm.d.ts`, `export const data: string;`);

const beforeMemoryJs = `export class Memory {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Memory.prototype);
        obj.__wbg_ptr = ptr;
        MemoryFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MemoryFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_memory_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    len() {
        const ret = wasm.memory_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {Uint8Array} inner
     */
    constructor(inner) {
        const ptr0 = passArray8ToWasm0(inner, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.memory_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        MemoryFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    ptr() {
        const ret = wasm.memory_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
}`

const beforeMemoryJs2 = `export class Memory {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MemoryFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_memory_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    len() {
        const ret = wasm.memory_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {Uint8Array} inner
     */
    constructor(inner) {
        const ptr0 = passArray8ToWasm0(inner, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.memory_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        MemoryFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    ptr() {
        const ret = wasm.memory_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
}`

const afterMemoryJs = `export class Memory {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Memory.prototype);
        obj.__wbg_ptr = ptr;
        MemoryFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        this.__wbg_ptr0 = 0;
        this.__wbg_len0 = 0;
        MemoryFinalization.unregister(this);
        return ptr;
    }

    free() {
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
        MemoryFinalization.register(this, this.__wbg_ptr, this);
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
}`

const afterMemoryJs2 = `export class Memory {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        this.__wbg_ptr0 = 0;
        this.__wbg_len0 = 0;
        MemoryFinalization.unregister(this);
        return ptr;
    }

    free() {
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
        MemoryFinalization.register(this, this.__wbg_ptr, this);
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
}`

const beforeMemoryTs = `export class Memory {
  free(): void;
  len(): number;
  constructor(inner: Uint8Array);
  ptr(): number;
}`

const afterMemoryTs = `export class Memory {
  free(): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}`

const glueJs = readFileSync(`./src/wasm/out/daemon.js`, "utf8")
  .replaceAll(beforeMemoryJs, afterMemoryJs)
  .replaceAll(beforeMemoryJs2, afterMemoryJs2)
  .replaceAll(`free()`, `[Symbol.dispose]()`)
  .replaceAll(`module_or_path = new URL('daemon_bg.wasm', import.meta.url);`, `throw new Error();`)

const glueTs = readFileSync(`./src/wasm/out/daemon.d.ts`, "utf8")
  .replaceAll(beforeMemoryTs, afterMemoryTs)
  .replaceAll(`free()`, `[Symbol.dispose]()`)

writeFileSync(`./src/wasm/out/daemon.js`, glueJs)
writeFileSync(`./src/wasm/out/daemon.d.ts`, glueTs)