// Función para sumar.
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar.
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar.
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir.
function dividir(num1, num2) {
    // NO se divide por cero.
    if (num2 === 0) {
        return "Error: Operacion inexistente";
    } else {
        return num1 / num2;
    }
}

// Función principal de la calculadora
function calculadora() {
    var operacion;

    // Bucle para permitir al usuario realizar múltiples operaciones
    do {
        operacion = prompt("Seleccione la operación que desea realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir de la operación");
        
        // Convertir la entrada del usuario a un número entero
        operacion = parseInt(operacion);

        // Verificar si el usuario desea salir de la operación
        if (operacion === 5) {
            // Salir del bucle y terminar la calculadora
            break;
        }

        // Verificar si la operación es válida
        if (operacion >= 1 && operacion <= 4) {
            var num1 = parseFloat(prompt("Ingrese el primer número:"));
            var num2 = parseFloat(prompt("Ingrese el segundo número:"));
            var resultado;

            // Realizar la operación correspondiente
            switch (operacion) {
                case 1:
                    resultado = sumar(num1, num2);
                    break;
                case 2:
                    resultado = restar(num1, num2);
                    break;
                case 3:
                    resultado = multiplicar(num1, num2);
                    break;
                case 4:
                    resultado = dividir(num1, num2);
                    break;
            }

            // Mostrar el resultado al usuario
            alert("El resultado es: " + resultado);
        } else if (operacion !== 5) {
            // Mostrar un mensaje de error si la operación no es válida
            alert("Operación no válida. Por favor, seleccione una operación del 1 al 5.");
        }
    } while (operacion !== 5);
}

// Llamar a la función para iniciar la calculadora
calculadora();


