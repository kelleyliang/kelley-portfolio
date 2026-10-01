export const commands = ['schedule 2', 'memory 8192', 'race', 'race lock', 'help', 'clear']

export function executeCommand(value) {
  const [command, ...args] = value.trim().toLowerCase().split(/\s+/)
  if (command === 'help') return 'A tiny systems playground. Try:\nschedule [1–10]  Round-robin scheduling with a time quantum\nmemory [address]  Split a virtual address into page and offset\nrace              Watch two workers lose an update\nrace lock         Compare with serialized access\nclear             Clear the output'
  if (command === 'schedule') {
    const quantum = args.length ? Number(args[0]) : 2
    if (args.length > 1 || !Number.isInteger(quantum) || quantum < 1 || quantum > 10) return 'Try schedule 2. The time quantum must be an integer from 1 to 10.'
    const jobs = [{ name: 'A', remaining: 5 }, { name: 'B', remaining: 3 }, { name: 'C', remaining: 1 }]
    let time = 0
    const timeline = []
    while (jobs.some(job => job.remaining > 0)) {
      for (const job of jobs) {
        if (!job.remaining) continue
        const duration = Math.min(quantum, job.remaining)
        timeline.push(`${time}–${time + duration}: ${job.name}`)
        time += duration
        job.remaining -= duration
      }
    }
    return `Round robin · quantum ${quantum}\nAll jobs arrive at time 0. CPU bursts: A=5, B=3, C=1.\n${timeline.join(' → ')}\nFinished at time ${time}. Context-switch overhead omitted.\nTry another quantum to change how often jobs take turns.`
  }
  if (command === 'memory') {
    const address = args.length ? Number(args[0]) : 8192
    if (args.length > 1 || !Number.isSafeInteger(address) || address < 0) return 'Try memory 8192. Use a nonnegative safe integer address.'
    const pageSize = 4096
    return `Virtual address: ${address}\nPage size: ${pageSize} bytes\nVirtual page: ${Math.floor(address / pageSize)}\nOffset within page: ${address % pageSize} bytes\nThe page table maps this virtual page to a physical frame.\nTry memory 8193 to move one byte into the same page.`
  }
  if (command === 'race') {
    if (args.length > 1 || (args.length && args[0] !== 'lock')) return 'Try race or race lock.'
    let counter = 0
    if (args[0] === 'lock') {
      const lines = ['Counter starts at 0.']
      for (const worker of ['A', 'B']) {
        const read = counter
        counter = read + 1
        lines.push(`${worker}: acquire lock → read ${read} → write ${counter} → release lock`)
      }
      return `${lines.join('\n')}\nFinal counter: ${counter}. Both increments preserved.\nThis example serializes access to the shared counter.`
    }
    const readA = counter
    const readB = counter
    counter = readA + 1
    counter = readB + 1
    return `Counter starts at 0.\nA reads ${readA} → B reads ${readB} → A writes ${readA + 1} → B writes ${readB + 1}\nFinal counter: ${counter}. Expected: 2. One increment was lost.\nA deliberately interleaved example; try race lock to compare.`
  }
  return `Unknown command: ${command}. Type help to explore the playground.`
}
