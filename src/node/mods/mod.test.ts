import { assert, test } from "@hazae41/phobos";
import { Buffer } from "node:buffer";
import { ChaCha20Poly1305Cipher, load, Memory } from "./mod.ts";

function equals(a: Uint8Array, b: Uint8Array) {
  return Buffer.from(a).equals(Buffer.from(b))
}

test("chacha20poly1305", async () => {
  await load()

  using key = new Memory(crypto.getRandomValues(new Uint8Array(32)))
  using nonce = new Memory(crypto.getRandomValues(new Uint8Array(12)))
  using message = new Memory(crypto.getRandomValues(new Uint8Array(256)))

  using chacha = new ChaCha20Poly1305Cipher(key)

  using encrypted = chacha.encrypt(message, nonce)
  using decrypted = chacha.decrypt(encrypted, nonce)

  assert(equals(message.bytes, decrypted.bytes))
})