#!/usr/bin/env ts-node

import path from 'path'
import fs from 'fs'

const sourceDirPath = path.join(__dirname, '../components/icons/')
const targetPath = path.join(__dirname, './icons.json')

async function generate() {
  const files = await fs.promises.readdir(sourceDirPath)
  const icons: { [key: string]: string } = {}
  for (const file of files) {
    const filename = file.replace('.vue', '')
    const filePath = path.join(sourceDirPath, file)
    const content = await fs.promises.readFile(filePath)
    icons[filename] = content.toString()
  }
  fs.writeFile(targetPath, JSON.stringify(icons), () => {})
}

generate().catch((err) => console.log(err))
