import fs from 'fs'
import { formatComponentName, generateComponent } from './utils'

  const outlinedFiles = fs.readdirSync(`${__dirname}/outline`)
  if(!fs.existsSync(`${__dirname}/output`)) {
    fs.mkdirSync(`${__dirname}/output`)
  }
  if(!fs.existsSync(`${__dirname}/output/outlined`)) {
    fs.mkdirSync(`${__dirname}/output/outlined`)
  }
  outlinedFiles.map((file) => {
    const svg = fs.readFileSync(`${__dirname}/outline/${file}`)
    const name = file.split('.')[0]
    fs.writeFileSync(`${__dirname}/output/outlined/${formatComponentName(file.split('.')[0], 'Outline')}.vue`, generateComponent(svg, name, 'Outline'))
  })

  const solidFiles = fs.readdirSync(`${__dirname}/outline`)
  if(!fs.existsSync(`${__dirname}/output`)) {
    fs.mkdirSync(`${__dirname}/output`)
  }
  if(!fs.existsSync(`${__dirname}/output/solid`)) {
    fs.mkdirSync(`${__dirname}/output/solid`)
  }
  solidFiles.map((file) => {
    const svg = fs.readFileSync(`${__dirname}/solid/${file}`)
    const name = file.split('.')[0]
    fs.writeFileSync(`${__dirname}/output/solid/${formatComponentName(file.split('.')[0], 'Solid')}.vue`, generateComponent(svg, name, 'Solid'))
  })
