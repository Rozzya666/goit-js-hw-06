const btnMinus = document.querySelector('button[data-action="decrement"]')
const btnPlus = document.querySelector('button[data-action="increment"]')
let value = document.querySelector('#value')
let counter = 0
btnMinus.addEventListener('click', (e) => {
    counter -= 1
    value.textContent = counter
})
btnPlus.addEventListener('click', (e) => {
    counter += 1
    value.textContent = counter
})

