'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')
const fs = requie('fs')
module.exports = () => {
    co(
        function*() {
            let tplName = yield prompt('template name :')

            if (config.tpl[tplName]) {
                config.tpl[tplName] = undefined
            } else {
                console.log(chalk.red('template does not existed!'))
                process.exit()
            }
            fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => {
                if (err) console.log(err)
                console.log(chalk.green('Template deleted!'))
                console.log(chalk.gray('the last template list is :\n'))
                console.log(config)
                console.log('\n')
                process.exit()
            })
        }
    )
}