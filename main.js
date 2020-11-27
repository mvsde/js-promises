'use strict'

function sleep (ms, value) {
  return new Promise(resolve => setTimeout(resolve, ms, value))
}

async function savePromiseToVariable () {
  const answer = sleep(2000, 42)
  console.log('  ', answer)

  const resolvedAnswer = await answer
  console.log('  ', answer)
  console.log('  Resolved:', resolvedAnswer)
}

async function saveResolvedToVariable () {
  const answer = await sleep(500, 1337)
  console.log('  Resolved:', answer)
}

function promiseChain () {
  // A bit old school, but the more you know ;-)

  return sleep(1000, 'First')
    .then(value => {
      console.log('  ', value)
      return sleep(1000, 'Second')
    })
    .then(value => {
      console.log('  ', value)
    })
}

async function main () {
  console.log('Save promise to variable:')
  await savePromiseToVariable()

  console.log('\nSave resolved to variable:')
  await saveResolvedToVariable()

  console.log('\nPromise chain:')
  await promiseChain()
}

main()
