#!/usr/bin/env ts-node

import path from 'path'
import fs from 'fs'
const types = ['icons', 'buttons']

async function generate(type: string) {
  const sourceDirPath = path.join(__dirname, `../components/${type}/`)
  const files = await fs.promises.readdir(sourceDirPath)
  const targetPath = path.join(__dirname, `./${type}.json`)
  const icons: { [key: string]: string } = {}
  for (const file of files) {
    const filename = file.replace('.vue', '')
    const filePath = path.join(sourceDirPath, file)
    const content = await fs.promises.readFile(filePath)
    icons[filename] = content.toString()
  }
  fs.writeFile(targetPath, JSON.stringify(icons), () => {})
}

Promise.all(types.map(generate)).catch((err) => console.log(err))
