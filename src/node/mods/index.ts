export * from "../../wasm/pkg/chacha20poly1305_wasm.js";

import init from "../../wasm/pkg/chacha20poly1305_wasm.js";
import { data } from "../../wasm/pkg/chacha20poly1305_wasm.wasm.js";

export async function initBundled() {
  return await init({ module_or_path: data })
}
