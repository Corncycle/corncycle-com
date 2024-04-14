GRAVITY = 3000

const titleItems = document.querySelectorAll('.title-text')
const fonts = [
  'cursive', // probably only comic sans on desktop
  '"Andale Mono", monospace',
  '"Courier New", monospace',
  '"Times", "Times New Roman", serif',
  '"Georgia", serif',
  '"Arial", sans-serif',
  '"Trebuchet", sans-serif',
  'system-ui',
]

const changeFont = (elt) => {
  const f = fonts.filter((font) => font !== elt.style.fontFamily)
  elt.style.fontFamily = f[Math.floor(Math.random() * f.length)]
}

titleItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    changeFont(item)
  })
})

const explosionButton = document.querySelector('.explosion-button')
const explosionItems = document.querySelector('body').children

explosionButton.addEventListener('click', () => {
  for (const item of explosionItems) {
    if (item !== document.querySelector('.github-link')) {
      item.style.position = 'relative'
      explodeItem(item)
    }
  }
})

const explodeItem = (elt) => {
  let x = 0
  let xv = randRange(-300, 300)

  let y = 0
  let yv = randRange(-1500, -750)

  let theta = 0
  let thetav = randRange(-1, 1)

  let last = -1
  let delta = 0

  const step = (timestamp) => {
    if (last === -1) {
      delta = 1
    } else {
      delta = Math.max(timestamp - last, 1)
    }
    delta /= 1000

    x += xv * delta
    yv += GRAVITY * delta
    y += yv * delta

    thetav = Math.sign(thetav) * Math.max(Math.abs(thetav) - delta * 0.1, 0)
    theta += thetav * delta

    elt.style.transform = `translate(${x}px, ${y}px) rotate(${theta}turn)`

    if (y > 2000) {
      return
    }

    window.requestAnimationFrame(step)
    last = timestamp
  }

  window.requestAnimationFrame(step)
}

// titleItems.forEach((item) => {
//   item.addEventListener('mouseleave', () => {
//     changeFont(item)
//   })
// })

const randRange = (min, max) => {
  return Math.random() * (max - min) + min
}
