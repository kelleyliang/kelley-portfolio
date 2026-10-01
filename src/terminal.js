export const commands = ['plant', 'fireflies', 'wish', 'cloud', 'help', 'clear']

const pick = items => items[Math.floor(Math.random() * items.length)]

export function executeCommand(value) {
  const [command] = value.trim().toLowerCase().split(/\s+/)
  if (command === 'help') return 'A few small things you can summon:\nplant       Grow something unexpected\nfireflies   Borrow a little light\nwish        Send a wish into orbit\ncloud       Check the imaginary weather\nclear       Make room for something new'
  if (command === 'plant') return pick([
    '      _\n    _(_)_\n   (_)@(_)\n     (_)\n      |\n    \\ | /\n  ____|____\n\nA little flower. Absolutely no deadlines.',
    '    🌱  →  🌿  →  🌷\n\nYou planted a tiny possibility. It seems happy here.',
    '    ✿   ✿\n      ✿   ✿\n    | | | |\n  ~~~~~~~~~~~\n\nA pocket-sized meadow has appeared. Please watch your step.',
  ])
  if (command === 'fireflies') return '       ·         ✧\n  ✦         ·          ·\n       ✧         ✦\n   ·        ·        ✧\n\nThe fireflies have clocked in for their evening shift.'
  if (command === 'wish') return pick([
    '       .     *\n          ✦\n    .          .\n\nWish received. A very small star is working on it.',
    '    ✧  ·  .  →  ☾\n\nYour wish is taking the scenic route through the universe.',
    '         ☆\n        /\n       ·\n\nOne shooting star, just for you. Make it a good one.',
  ])
  if (command === 'cloud') return pick([
    '       .--.\n    .-(    ).\n   (___.__)__)\n\nForecast: a 90% chance of daydreaming.',
    '       ☁      ☁\n           ☀\n\nThe sky has cleared a little space for your next idea.',
    '         ☁\n      ·  ·  ·\n\nA gentle rain. The imaginary plants needed this.',
  ])
  return 'A tiny moth inspected that command and looked confused.\nTry plant, fireflies, wish, cloud, or help.'
}
