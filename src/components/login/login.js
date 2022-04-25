const init = () => {

    const validateEmail = (event) =>{
    const input = event.currentTarget;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(input.value);

    if(!emailTest){
        submitButton.setAttribute("disabled", "disabled");
        input.nextElementSibling.classList.add('error');
    }else{
        submitButton.removeAttribute("disabled");
        input.nextElementSibling.classList.remove('error');
        }
    }

    const validatePassowrd = (event) => {
    const input = event.currentTarget;

    if(input.value.length < 8) {
        submitButton.setAttribute("disabled", "disabled");
        input.classList.add('error');
    } else {
        submitButton.removeAttribute("disabled");
        input.classList.remove('error');
         }
    }

    const inputEmail = document.querySelector('.input_login');
    const inputPassword = document.querySelector('.input_senha');
    const submitButton = document.querySelector('.button');

    inputEmail.addEventListener('input', validateEmail)
    inputPassword.addEventListener('input', validatePassowrd)

    const error = () => {
        submitButton.classList.remove('success');
        submitButton.classList.add('error')
    }

    const sucess = () => {
        submitButton.classList.remove('error')
        mensagemSucess.classList.add('success')
    }

    const loading = () => {
        submitButton.value = "Loading...";
    }



    if(submitButton){
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            loading()

            fetch('https://reqres.in/api/login', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                 })
                 
            }).then((response) => {
                if(response.status !== 200){
                    error()
                    return 
                }
                    sucess();
                    return 
            }).catch(() => {
                error();
            })
       
        })
    
    }
   
}
window.onload = init;
