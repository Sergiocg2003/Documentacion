//npm i jsdoc CREA ARCHIVOS

//npm run doc CREA DOCUMENTACION



/**
 * -Funcion para sumarle 2 a un numero introducido.
 * @property {function} -Funcion calculo
 * @param {number} -Numero introducido usuario
 * @returns {number} -estoy debolviendo 2
 */
function calc(nume){
    return nume + 2;
}

/**
 * Clase Pepe
 */
class Pepe{
    /**
     * Constructor de Pepe
     * @param {string} nombre 
     * @param {string} apellido 
     */
    constructor(nombre, apellido){
        if(typeof(nombre) == String && typeof(apellido) == String){
            this.nombre = nombre
            this.apellido = apellido
        }
    }

    /**
     * @property {number | string} -Edad pepe
     */
    edad = 1

    getEdad(){
        return this.edad
    }

    setEdad(edad){
        this.edad = edad
    }

}

let pepe = new Pepe("Juan", "Aksk")

if(pepe instanceof Pepe){
    return "OK"
}

pepe.setEdad(30)
