'use strict'
//给命令行添加颜色
const chalk = require('chalk')
//对比版本
const semver = require('semver')
const packageConfig = require('../package.json')
//输出在cmd，通过shelljs输出
const shell = require('shelljs')

//执行，cmd是你需要执行的命令
//child_process node.js原生模块，开启一个进程
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    //正在使用的node版本
    currentVersion: semver.clean(process.version),
    //环境需要的node版本
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    //当前npm版本号
    currentVersion: exec('npm --version'),
    //环境要求的npm版本
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    //退出
    process.exit(1)
  }
}
