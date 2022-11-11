let email = document.querySelector('input[type=email]')
let password = document.querySelector('input[type=password]')
let btn = document.querySelector('button')
let form = document.querySelector('form')
const validForm = (e) => {
    e.preventDefault()
    if(email.value.length < 10){
        alert('Incorrect email')
        return false
    }
    if(password.value.length < 6){
        alert('Password is short, it should be at least 6 symbols')
        return false
    }
    
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(`Your email: ${data.email}, your password: ${data.password}`);
    form.reset()
}
btn.addEventListener('click', validForm)