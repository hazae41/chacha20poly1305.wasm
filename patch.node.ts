import fs from "node:fs"

const { name } = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const slashes = "/..".repeat(name.split("/").length)

const original = fs.readFileSync("./out/wasm/Cargo.toml", "utf8")

const replaced = original.replaceAll("../../node_modules", `../..${slashes}`)

fs.writeFileSync("./out/wasm/Cargo.toml", replaced)