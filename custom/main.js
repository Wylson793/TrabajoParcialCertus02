/*cuando haya cargado la pagina */
$("document").ready(function(){

    /*capturamos el evento submit */
    $("#registroUsuario").submit(function(){
        /*confirmacion de envio del formulario */
        return validarDatos();
    })

})

/*Validamos los datos */
function validarDatos(){
    /*preguntar si se envia el formulario */
    let pregunta = confirm("¿Seguro que desea enviar el formulario?");
    if(pregunta) { //caso si presiona aceptar
        
        /*obtener campos */
        let inputName = $("#txtName")[0].value;
        let inputEmail = $("#txtEmail")[0].value;

        /*validar el formulario */
        if (inputName.length > 50 || inputName.length < 2){
            alert("EL nombre no es Valido.");
            return false;
        }

        if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail)==false){
            alert("Su correo electronico esta mal");
            return false;
        }

        /*mandar confirmacion de envio */
        return true;

    }else{ //caso presiona cancelar
        return false;
    }
}