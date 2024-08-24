# chacha20poly1305.wasm

WebAssembly port of Chacha20Poly1305

```bash
npm i @hazae41/chacha20poly1305.wasm
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/chacha20poly1305.wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Modules
- chacha20poly1305

## Algorithms
- Chacha20Poly1305

## Usage

```typescript
import { Chacha20Poly1305Wasm, ChaCha20Poly1305Cipher } from "@hazae41/chacha20poly1305.wasm";

// Wait for WASM to load
await Chacha20Poly1305Wasm.initBundled();

using key = new Memory(crypto.getRandomValues(new Uint8Array(32)))
using nonce = new Memory(crypto.getRandomValues(new Uint8Array(12)))
using message = new Memory(crypto.getRandomValues(new Uint8Array(256)))

using chacha = new ChaCha20Poly1305Cipher(key)

using encrypted = chacha.encrypt(message, nonce)
using decrypted = chacha.decrypt(encrypted, nonce)

console.log(encrypted.bytes)
console.log(decrypted.bytes)
```

## Building

### Unreproducible building

You need to install [Rust](https://www.rust-lang.org/tools/install)

Then, install [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

```bash
cargo install wasm-pack
```

Finally, do a clean install and build

```bash
npm ci && npm run build
```

### Reproducible building

You can build the exact same bytecode using Docker, just be sure you're on a `linux/amd64` host

```bash
docker compose up --build
```

Then check that all the files are the same using `git status`

```bash
git status --porcelain
```

If the output is empty then the bytecode is the same as the one I commited

### Automated checks

Each time I commit to the repository, the GitHub's CI does the following:
- Clone the repository
- Reproduce the build using `docker compose up --build`
- Throw an error if the `git status --porcelain` output is not empty

Each time I release a new version tag on GitHub, the GitHub's CI does the following:
- Clone the repository
- Do not reproduce the build, as it's already checked by the task above
- Throw an error if there is a `npm diff` between the cloned repository and the same version tag on NPM

If a version is present on NPM but not on GitHub, do not use!
