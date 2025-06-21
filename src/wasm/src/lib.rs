mod mods;

pub use mods::*;

#[macro_export]
macro_rules! rjse {
    ($x:expr) => {
        $x.map_err(|_| JsError::new(std::any::type_name_of_val(&|| {})))
    };
}

#[macro_export]
macro_rules! ojse {
    ($x:expr) => {
        $x.ok_or_else(|| JsError::new(std::any::type_name_of_val(&|| {})))
    };
}
