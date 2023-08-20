document.addEventListener('DOMContentLoaded', function () {
    const formularioCalculadora = document.getElementById('formulario-calculadora');
    const botonCalcular = document.getElementById('boton-calcular');
    const mensajeError = document.getElementById('mensaje-error');
    const contenedorResultado = document.getElementById('resultado-container');
    const resultadoFresnel = document.getElementById('resultado-fresnel');
    const tablaPasos = document.getElementById('tabla-pasos');
    const valorDistancia = document.getElementById('valor-distancia');
    const valorFrecuencia = document.getElementById('valor-frecuencia');
    const botonAtras = document.getElementById('boton-atras');

    botonCalcular.addEventListener('click', function () {
        const distanciaEntrada = parseFloat(document.getElementById('distancia').value);
        const frecuenciaEntrada = parseFloat(document.getElementById('frecuencia').value);

        if (isNaN(distanciaEntrada) || isNaN(frecuenciaEntrada) || distanciaEntrada <= 0 || frecuenciaEntrada <= 0) {
            mensajeError.textContent = "La distancia y la frecuencia deben ser números positivos.";
            contenedorResultado.style.display = 'none';
            mensajeError.style.display = 'block';
        } else {
            const F1 = 8.656 * Math.sqrt(distanciaEntrada) / frecuenciaEntrada;
            mensajeError.style.display = 'none';
            resultadoFresnel.textContent = `F1: ${F1.toFixed(2)} metros`;
            tablaPasos.style.display = 'block';
            valorDistancia.textContent = distanciaEntrada;
            valorFrecuencia.textContent = frecuenciaEntrada;
            const pasoCalculo = `F1[m] = 8.656 * √(${distanciaEntrada}) / ${frecuenciaEntrada.toFixed(2)} ≈ ${F1.toFixed(3)} metros`;
            document.getElementById('paso-calculo').textContent = pasoCalculo;
            contenedorResultado.style.display = 'block';
        }
    });

    botonAtras.addEventListener('click', function () {
        formularioCalculadora.reset();
        tablaPasos.style.display = 'none';
        contenedorResultado.style.display = 'none';
        mensajeError.style.display = 'none';
    });
});

