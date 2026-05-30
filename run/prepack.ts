import { cpSync, readFileSync, rmSync, writeFileSync } from "node:fs"

const { name } = JSON.parse(readFileSync("./package.json", "utf8"))

cpSync("./src/wasm", "./out/wasm", { recursive: true })

const patched = readFileSync("./out/wasm/Cargo.toml", "utf8")
  .replaceAll("daemon", name.split("/")[1].replaceAll("-", "_"))
  .replaceAll("../../node_modules", `../..${"/..".repeat(name.split("/").length)}`)

writeFileSync("./out/wasm/Cargo.toml", patched)

rmSync("./out/wasm/target", { recursive: true, force: true })
rmSync("./out/wasm/.gitignore", { force: true })