import chalk from 'chalk'

const env = process.env.NODE_ENV || 'test'
const DISABLE_AXMEN = process.env.DISABLE_AXMEN || false

class Logger {
  constructor() {
    this.namespace = ''
    this.enable = !DISABLE_AXMEN
  }

  configure({
    namespace,
    showEnv = true,
  } = {}) {
    this.namespace = namespace
    this.showEnv = showEnv
  }

  log(...args) {
    if (!this.enable) return

    const prepend = [
      this.namespace && chalk.blue(`[${this.namespace}]`),
      this.showEnv && env && chalk.blue(`[env=${env}]`),
    ].filter(a => a)

    args = prepend.concat(args)
    console.log(
      ...args,
    )
  }
}

export default new Logger()
