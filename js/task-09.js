const btn = document.querySelector('button')
const hexBg = document.querySelector('span')
btn.addEventListener('click', () => {
  hexBg.innerHTML = getRandomHexColor()
  document.body.style.backgroundColor = getRandomHexColor()
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

