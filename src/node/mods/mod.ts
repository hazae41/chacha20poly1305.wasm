export * from "../../wasm/pkg/chacha20poly1305_wasm.js";

/* @ts-types="../../wasm/pkg/chacha20poly1305_wasm.d.ts" */
import init, { type InitOutput } from "../../wasm/pkg/chacha20poly1305_wasm.js";
import { data } from "../../wasm/pkg/chacha20poly1305_wasm.wasm.js";

export async function initBundled(): Promise<InitOutput> {
  return await init({ module_or_path: data })
}
