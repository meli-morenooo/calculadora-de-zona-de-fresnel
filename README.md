# Calculadora de Zona de Fresnel

Esta aplicación web implementa una calculadora de Zona de Fresnel utilizando HTML, CSS y JavaScript. La Zona de Fresnel es un concepto importante en las comunicaciones inalámbricas que se utiliza para prever posibles interferencias y obstáculos en la propagación de señales de radio entre una antena transmisora y una receptora.

## Contenido

- [Descripción](#descripción)
- [Uso de la Calculadora](#uso-de-la-calculadora)
- [Zona de Fresnel](#zona-de-fresnel)
- [Fórmula Utilizada](#fórmula-utilizada)

## Descripción

La calculadora permite a los usuarios ingresar la distancia entre dos antenas en kilómetros y la frecuencia de operación en gigahertz (GHz). Luego, calcula y muestra la Zona de Fresnel libre para esa distancia y frecuencia. Además, proporciona los pasos detallados del cálculo.

## Uso de la Calculadora

1. Ingresa la distancia entre las antenas en kilómetros en el campo "Distancia".
2. Ingresa la frecuencia de operación en gigahertz (GHz) en el campo "Frecuencia".
3. Haz clic en el botón "Calcular".
4. Se mostrará el resultado de la Zona de Fresnel en metros y los pasos detallados del cálculo.

## Zona de Fresnel

La Zona de Fresnel es un concepto en las comunicaciones inalámbricas que se refiere al área alrededor de la línea de vista directa entre dos antenas. Esta zona debe mantenerse libre de obstáculos para garantizar una transmisión de señal óptima y minimizar la interferencia. La Zona de Fresnel se forma debido a la difracción de las ondas de radio alrededor de obstáculos en su camino.

## Fórmula Utilizada

La calculadora utiliza la siguiente fórmula para calcular la Zona de Fresnel libre:

```
F1[m] = 8.656 * √(D[km]) / f[GHz]
```

Donde:
- `F1[m]` es la Zona de Fresnel en metros.
- `D[km]` es la distancia entre las antenas en kilómetros.
- `f[GHz]` es la frecuencia de operación en gigahertz (GHz).

La fórmula toma en cuenta la distancia y la frecuencia para prever el tamaño de la Zona de Fresnel necesaria.
