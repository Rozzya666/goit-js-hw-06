let input = document.querySelector('#name-input')
let spanChange = document.querySelector('#name-output')

input.addEventListener('keyup', () => {
    if(input.value.length == 0){
        spanChange.innerHTML = 'Anonymus'
    }else{
        spanChange.innerHTML = input.value
    }
})

