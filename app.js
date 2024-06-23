function calcularSerieFibonacci() {

    // se captura el dato del usuario y se guarda en una variable
    let numero = document.getElementById("numero").value;

    // capturo la etiqueta p
    let resultado = document.getElementById("texto-fibonacci");

    // validar que el campo este vacio o no
    if (numero == "") {
        alert("Este campo NO puede estar vacio!");
    }else{
        // identificar si el dato de entrada es de tipo number
        try {
            // verificar si la conversión no fue exitosa 
            if (isNaN(numero)) {
                throw new Error("Intentelo de nuevo, debe ingresar un número");
                
            }else{
                numero = parseInt(numero);
                //console.log(numero);
                if(numero === 0){
                    alert("Debe ingresar un numero mayor a 0");
                }else if (numero === 1) {
                    resultado.textContent = 0;
                } else if (numero > 1) {
                    let a = 0;
                    let b = 1;
                    let serie = [a,b];

                    for (let i = 2; i < numero; i++) {
                        let suma = serie[i - 1] + serie[i - 2];
                        serie.push(suma);
                    }
                    //console.log(serie);
                    resultado.textContent = serie;
                    
                }
            }
                        // Limpiar el input después de procesar
                        document.getElementById("numero").value = "";
        } catch (error) {
            // capturar el error y mostrar una alerta al usuario
            alert(error);   
        }
    
    

    }




}