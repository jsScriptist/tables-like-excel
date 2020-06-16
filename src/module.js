console.log('module.js works!')

async function start() {
   return  await Promise.resolve('async works!')
}
start().then(console.log)
