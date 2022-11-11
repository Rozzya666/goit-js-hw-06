const input = document.querySelector('#validation-input')
input.onblur = function() {
    if (input.value.length !== 6) { // не email
      input.classList.add('invalid');
    }else{
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
  };