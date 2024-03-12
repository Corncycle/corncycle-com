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

// titleItems.forEach((item) => {
//   item.addEventListener('mouseleave', () => {
//     changeFont(item)
//   })
// })
