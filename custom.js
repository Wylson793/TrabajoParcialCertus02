/*mostrar un cuadro que confirme si se envia o no los datos */
function validarDatos() {
    /*si devuelve la pregunta */
    if (confirm("Desea enviar su formulario para su registro?")) {
        /*si devuelve true la pregunta */
        let inputUser = document.getElementById("txtUser").value;
        /*validar si el usuario esta bien escrito*/
        if (inputUser.length < 4 || inputUser.length > 16 || inputUser.length == null) {
            /*referencia de elemento */
            let apoyoInputUser = document.getElementById("apoyoInputUser");
            /*cambiar el atributo style */
            apoyoInputUser.setAttribute("style", "");
            alert("el usuario no es valido");
            return false;
        }

        /*referencia el valor del elemento #user */
        let inputPassword = document.getElementById("txtpassword").value;
        /*referencia el valor del elemento #user */
        let inputrePassword = document.getElementById("txtrepassword").value;
        /*validar que la contraseña cumpla las condiciones*/
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(inputPassword) == false) {
            document.getElementById("txtpassword").value = "";
            document.getElementById("txtrepassword").value = "";
            alert("La contraseña no cumple con los requisitos minimos");
            return false;
        }

        /*validar las contraseñas si no son iguales */
        if (inputPassword !== inputrePassword) {
            /*referencia de elemento */
            let apoyoInputPassword = document.getElementById("apoyoInputPassword");
            /*cambiar el atributo style */
            apoyoInputPassword.setAttribute("style", "");
            /*document.getElementById("repassword").value = "";*/
            alert("Las contraseñas no son iguales");
            return false;
        }
        return true;

    } else {
        return false;
    }
}