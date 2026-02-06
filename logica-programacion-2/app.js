const boton = document.getElementById("convertirBtn");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {

    let valor = document.getElementById("celsiusInput").value;
    let celsius = Number(valor);

    // Validación de número
    if (isNaN(celsius) || valor.trim() === "") {
        resultado.textContent = "Error: Debes ingresar un número válido.";
        return;
    }

    // Conversiones
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;

    // Mostrar resultados
    resultado.innerHTML = `
        Grados Kelvin: ${kelvin} <br>
        Grados Fahrenheit: ${fahrenheit}
    `;
});
