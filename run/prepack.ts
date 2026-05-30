import { readFileSync, writeFileSync } from "node:fs"

const { name } = JSON.parse(readFileSync("./package.json", "utf8"))

const patched = readFileSync("./out/wasm/Cargo.toml", "utf8")
  .replaceAll("daemon", name.split("/")[1].replaceAll("-", "_"))
  .replaceAll("../../node_modules", `../..${"/..".repeat(name.split("/").length)}`)

writeFileSync("./out/wasm/Cargo.toml", patched)