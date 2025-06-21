#![no_std]

mod mods;

pub use mods::*;

#[macro_export]
macro_rules! rjse {
    ($x:expr) => {
        $x.map_err(|_| JsError::new("Error"))
    };
}

#[macro_export]
macro_rules! ojse {
    ($x:expr) => {
        $x.ok_or_else(|| JsError::new("Error"))
    };
}
