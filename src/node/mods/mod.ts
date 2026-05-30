export * from "../../wasm/out/daemon.js";

/* @ts-types="../../wasm/out/daemon.d.ts" */
import init, { initSync, type InitOutput } from "../../wasm/out/daemon.js";
import { data } from "../../wasm/out/daemon.wasm.js";

export async function load(): Promise<InitOutput> {
  return await init({ module_or_path: data })
}

export function loadSync(): InitOutput {
  return initSync({ module_or_path: data });
}
