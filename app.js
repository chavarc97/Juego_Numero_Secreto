const secretNumber = document.querySelector ('.secret-number');

const randomNumber = Math.trunc(Math.random() * 20 +1);

secretNumber.textContent = randomNumber;


// para seleccionar el mensaje

const mensaje = document.querySelector('#mensaje');

//para el valor del input
const button = document.querySelector ('.check');
button.addEventListener('click', function(){

    const respuestaString = document.querySelector ('#floatingInput').value;
    const respuesta = Number(respuestaString);

    if(respuesta === randomNumber){
        mensaje.classList.remove = ('');  
       
        mensaje.textContent = 'correcto  🎉';
        mensaje.classList.add('alert-success', 'alert');
    } else if(respuesta > randomNumber) {
       
        mensaje.classList.remove = ('');
        mensaje.textContent = 'Intenta con un número menor 🙃';
        mensaje.classList.add('alert-warning', 'alert');
    } else if(respuesta < randomNumber) {
    
        mensaje.classList.remove = ('');
        mensaje.textContent = 'intenta con un número mayor 😞';
        mensaje.classList.add('alert-warning', 'alert');
    }


});



