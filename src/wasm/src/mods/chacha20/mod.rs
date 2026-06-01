use wasm_bindgen::prelude::*;

use crate::libs::jse::rjse;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct ChaCha20Cipher {
    pub(crate) inner: chacha20::ChaCha20,
}

#[wasm_bindgen]
impl ChaCha20Cipher {
    #[wasm_bindgen(constructor)]
    pub fn new(key: &Memory, nonce: &Memory) -> Result<ChaCha20Cipher, JsError> {
        use chacha20::cipher::KeyIvInit;
        use chacha20::ChaCha20;

        let inner = rjse!(ChaCha20::new_from_slices(&key.inner, &nonce.inner))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn seek(&mut self, position: u32) -> Result<(), JsError> {
        use chacha20::cipher::StreamCipherSeek;

        rjse!(self.inner.try_seek(position))?;

        Ok(())
    }

    #[wasm_bindgen]
    pub fn apply_keystream(&mut self, memory: &mut Memory) -> Result<(), JsError> {
        use chacha20::cipher::StreamCipher;

        rjse!(self.inner.try_apply_keystream(&mut memory.inner))?;

        Ok(())
    }
}
