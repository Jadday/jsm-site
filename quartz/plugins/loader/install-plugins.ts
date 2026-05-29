#!/usr/bin/env node
import fs from "fs"
import path from "path"
import YAML from "yaml"
import { installPlugins, parsePluginSource } from "./gitLoader.js"

function readExternalPlugins(): string[] {
  const configPath = path.join(process.cwd(), "quartz.config.yaml")
  const raw = fs.readFileSync(configPath, "utf-8")
  const parsed = YAML.parse(raw)
  return (parsed?.plugins ?? [])
    .filter((entry: { enabled?: boolean }) => entry.enabled)
    .map((entry: { source: string }) => entry.source)
}

async function main() {
  const externalPlugins = readExternalPlugins()

  if (externalPlugins.length === 0) {
    console.log("No external plugins to install.")
    return
  }

  console.log(`Installing ${externalPlugins.length} plugin(s) from Git...`)

  const specs = externalPlugins.map((source: string) => parsePluginSource(source))
  const installed = await installPlugins(specs, { verbose: true })

  if (installed.size === externalPlugins.length) {
    console.log("✓ All plugins installed successfully")
  } else {
    console.error(`✗ Only ${installed.size}/${externalPlugins.length} plugins installed`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error("Failed to install plugins:", err)
  process.exit(1)
})
