const title = document.querySelector('.title-text')
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

const changeTitleFont = () => {
  const f = fonts.filter((font) => font !== title.style.fontFamily)
  title.style.fontFamily = f[Math.floor(Math.random() * f.length)]
}

title.addEventListener('mouseover', () => {
  changeTitleFont()
})

title.addEventListener('mouseleave', () => {
  changeTitleFont()
})
