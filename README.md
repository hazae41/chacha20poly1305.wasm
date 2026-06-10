# chacha20poly1305.wasm

WebAssembly port of ChaCha20-Poly1305

```bash
npm install @hazae41/chacha20poly1305-wasm
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/chacha20poly1305-wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Modules
- chacha20
- chacha20poly1305

## Algorithms
- ChaCha20
- ChaCha20-Poly1305

## Usage

### ChaCha20-Poly1305

```typescript
import { load, Memory, ChaCha20Poly1305Cipher } from "@hazae41/chacha20poly1305-wasm";

await load()

using key = new Memory(crypto.getRandomValues(new Uint8Array(32)))
using nonce = new Memory(crypto.getRandomValues(new Uint8Array(12)))

using cipher = new ChaCha20Poly1305Cipher(key)

using message = new Memory(crypto.getRandomValues(new Uint8Array(256)))

using encrypted = cipher.encrypt(message, nonce)
using decrypted = cipher.decrypt(encrypted, nonce)

console.log(encrypted.bytes)
console.log(decrypted.bytes)
```

### ChaCha20

```tsx
import { load, Memory, ChaCha20Cipher } from "@hazae41/chacha20poly1305-wasm";

await load()

using key = new Memory(crypto.getRandomValues(new Uint8Array(32)))
using nonce = new Memory(crypto.getRandomValues(new Uint8Array(12)))

using encryptor = new ChaCha20Cipher(key, nonce)
using decryptor = new ChaCha20Cipher(key, nonce)

using memory = new Memory(crypto.getRandomValues(new Uint8Array(256)))

encryptor.apply_keystream(memory)

console.log(memory.bytes)

decryptor.apply_keystream(memory)

console.log(memory.bytes)
```

## Building

### Reproducible building

You can build the exact same bytecode

```bash
npm run compile && npm run prepack
```

Then check that all the files are the same using `npm diff`

```bash
npm diff
```

If the output is empty then the bytecode is the same as the one I published on NPM.

### Automated checks

Each time I release a new version on GitHub, the GitHub's CI clones the GitHub repository, reproduces the build, and throws an error if the NPM release is different. If a version is present on NPM but not on GitHub, do not use it!
