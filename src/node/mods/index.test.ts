import { assert, test } from "@hazae41/phobos";
import { ChaCha20Poly1305Cipher, initBundled, Memory } from "./index.js";

function equals(a: Uint8Array, b: Uint8Array) {
  return Buffer.from(a).equals(Buffer.from(b))
}

test("chacha", async () => {
  await initBundled()

  using key = new Memory(crypto.getRandomValues(new Uint8Array(32)))
  using nonce = new Memory(crypto.getRandomValues(new Uint8Array(12)))
  using message = new Memory(crypto.getRandomValues(new Uint8Array(256)))

  using chacha = new ChaCha20Poly1305Cipher(key)

  using encrypted = chacha.encrypt(message, nonce)
  using decrypted = chacha.decrypt(encrypted, nonce)

  assert(equals(message.bytes, decrypted.bytes))
})
