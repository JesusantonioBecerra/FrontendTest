# Frontend Test

Bienvenid@ a la prueba técnica que hemos diseñado para quienes postulan al cargo de frontend developer en Envíame.
La prueba está diseñada para ser resuelta en tres jornadas laborales (3 días).

**Asegurate de dejar tu trabajo en un repositorio de github y al finalizar tu tarea nos compartes el repositorio donde deben incluirse todas las instrucciones para que podamos ejecutar tu trabajo de manera local.**

#### Importante: ####
**El código debe utilizar sintaxis ES6 (ES2015) o super**

En caso de preguntas dirigete a: *frontend-tech-test@enviame.io*, usando el asunto [Frontend-Test]

Te deseamos mucho éxito!

#### Ejercicio 1  (**2pts**)

Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos.

__En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.__

Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.

El entregable puede ser un script que se pueda ejecutar por terminal o una web simple sin diseño. 

#### Ejercicio 2  (**3pts**)

Dado los siguientes json:
​
```javascript
   // JSON 
   let values =  {
        1: {
            carrier: "CCH",
            service: "DEX",
        },
        17: {
            carrier: "CHP",
            service: "express",
        }
   }
  // JSON
   let json = { 
                data: {
                    BUIN: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    },
                    LAJA: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LEBU: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LOTA: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    }
                }
            }
```

Se debe generar un script que con estas entradas genere el siguiente resultado:

```javascript
   let result = {
        BUIN: {
            limit: 1,
            over: {
                carrier: "CHP",
                service: "express",
            },
            under: {
                carrier: "CHP",
                service: "express",
            }
        },
        LAJA: {
            limit: 1,
            over: {
                carrier: "CCH",
                service: "DEX",
            },
            under: {
                 carrier: "CCH",
                service: "DEX",
            }
        },
        LEBU: {
            limit: 1,
            over: {
                carrier: "CCH",
                service: "DEX",
            },
            under: {
                 carrier: "CCH",
                service: "DEX",
            }
        },
        LOTA: {
            limit: 1,
            over: {
                carrier: "CHP",
                service: "express",
            },
            under: {
                carrier: "CHP",
                service: "express",
            }
        }
   } 
```

El script debe estar escrito en javascript (puedes usar librerías/frameworks que te ayuden con la manipulación de los json), el entregable puede ser un script por terminal o una web simple.

#### Ejercicio 3   (**5pts**)

El siguiente desafío pondrá a prueba tus habilidades como frontend, el desafío consta de construir una interfaz web responsive de los super héroes de Marvel.
<br> _En la evaluación consideraremos usabilidad y consistencia en el diseño._

##### API

Para poder utilizar la API debes ingresar a https://developer.marvel.com/ sección **Get a key** completar el formulario de registro y del menú API-KEY. Luego de obtener la **public y private key** revisa la forma de autenticar en el siguiente [link](https://developer.marvel.com/documentation/authorization) para poder acceder a los recursos y al endpoint de personajes.

##### Requerimientos

1 - Construir una interfaz web en la cual se listen los super héroes de Marvel entregados por la API `https://gateway.marvel.com/v1/public/characters`, cada elemento de la lista debe entregar la siguiente información (**2pts**)
    - Name
    - Description
    - Thumbnail
    - Modified (Fecha en formato 'DD-MM-YYYY')

2 - El listado debe tener infinite scroll que vaya cargando más super héroes al listado. (**2pts**) 

3 - Añadir un buscador en la interfaz que permita buscar un super héroe por su nombre. (**1pts**)

4 - Generar un componente nuevo que permita editar la información “Name” y “Description” localmente y actualizar el listado en consecuencia. (Al actualizar el sitio está bien que se pierda la información) (**2pts**)

#### Requerimientos técnicos
​
La interfaz web debe estar construida con el framework y/o librerías a elección (ReacJS, Vue, Angular, CSS Bootstrap, Less/SASS, etc.)

