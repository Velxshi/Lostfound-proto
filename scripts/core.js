const splash = document.getElementById('splash')
const logo = document.getElementById('logo')
const title = document.getElementById('title')

// Logo muncul
setTimeout(() => {
  logo.classList.add('show-logo')
}, 300)

// Text muncul
setTimeout(() => {
  title.classList.add('show-text')
}, 1000)

// Splash hilang
setTimeout(() => {
  splash.classList.add('hide')
}, 2500)

// Hapus splash dari
setTimeout(() => {
  splash.remove()
}, 3300)
