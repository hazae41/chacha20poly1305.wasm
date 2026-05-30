# chacha20poly1305.wasm

WebAssembly port of ChaCha20-Poly1305

```bash
npm install --save-peer @hazae41/chacha20poly1305-wasm
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/chacha20poly1305-wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Modules
- chacha20poly1305

## Algorithms
- ChaCha20-Poly1305

## Usage

```typescript
import { chaCha20Poly1305Wasm } from "@hazae41/chacha20poly1305-wasm";

// Wait for WASM to load
await chaCha20Poly1305Wasm.load();

using key = new chaCha20Poly1305Wasm.Memory(crypto.getRandomValues(new Uint8Array(32)))
using nonce = new chaCha20Poly1305Wasm.Memory(crypto.getRandomValues(new Uint8Array(12)))
using message = new chaCha20Poly1305Wasm.Memory(crypto.getRandomValues(new Uint8Array(256)))

using chacha = new chaCha20Poly1305Wasm.ChaCha20Poly1305Cipher(key)

using encrypted = chacha.encrypt(message, nonce)
using decrypted = chacha.decrypt(encrypted, nonce)

console.log(encrypted.bytes)
console.log(decrypted.bytes)
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
