/* tslint:disable */
/* eslint-disable */
export class ChaCha20Cipher {
  [Symbol.dispose](): void;
  constructor(key: Memory, nonce: Memory);
  seek(position: number): void;
  apply_keystream(memory: Memory): void;
}
export class ChaCha20Poly1305Cipher {
  [Symbol.dispose](): void;
  constructor(key: Memory);
  encrypt(message: Memory, nonce: Memory): Memory;
  decrypt(message: Memory, nonce: Memory): Memory;
}
export class Memory {
  [Symbol.dispose](): void;
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
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_chacha20poly1305cipher_free: (a: number, b: number) => void;
  readonly chacha20poly1305cipher_new: (a: number) => [number, number, number];
  readonly chacha20poly1305cipher_encrypt: (a: number, b: number, c: number) => [number, number, number];
  readonly chacha20poly1305cipher_decrypt: (a: number, b: number, c: number) => [number, number, number];
  readonly __wbg_chacha20cipher_free: (a: number, b: number) => void;
  readonly chacha20cipher_new: (a: number, b: number) => [number, number, number];
  readonly chacha20cipher_seek: (a: number, b: number) => [number, number];
  readonly chacha20cipher_apply_keystream: (a: number, b: number) => [number, number];
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
