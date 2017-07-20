'use  strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')

module.exports = () => {
    co(
        function*() {
            let tplName = yield prompt('template name is : ')
            let projectName = yield prompt('Project name is :')
            let gitUrl
            let branch
            if (!config.tpl[tplName]) {
                console.log(chalk.red('\n * Template does not exist'))
                process.exit()
            }
            gitUrl = config.tpl[tplName].gitUrl
            branch = config.tpl[tplName].branch

            let cmdStr = `git clone -b ${branch} ${gitUrl} ${projectName}`
            console.log(chalk.white('\n Start generating ... '))
            exec(cmdStr, (error, stdout, stderr) => {
                if (error) {
                    console.log(error)
                    process.exit()
                }
                console.log(chalk.green('\n Generation completed !'))
                console.log(`\n cd ${projectName} && npm install \n`)
                process.exit()
            })

        }
    )
}