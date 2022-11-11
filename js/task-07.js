const range = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
console.log(range.value);
range.addEventListener('mousemove', () => {
    text.style.fontSize = `${range.value}px`
    console.log(range.value);
})