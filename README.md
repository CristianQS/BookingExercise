# Práctica buscador de apartamentos

Es tu turno ! Usando las técnicas y métodos de ES6 o importando librerías como lodash deberás de realizar la siguiente práctica de la manera más eficiente posible y con buen código.

### Enunciado

Dispones de un json con datos de más de 1000 apartamentos/hoteles extraídos directamente de booking haciendo una búsqueda en Londres. 

Estos apartamentos tienen una serie de atributos con los que podrás representarlos perfectamente en la pantalla (imagen, titulo, descripción, votación, etc) y podrás realizar filtrados y ordenaciones con ellos. 

Se pide : 

    - [ ] Realiza una intefaz similar a la de trivago. Tira de bootstrap todo lo que puedas.
    - [ ] Aparecerá un listado de 15 en 15 apartamentos (Trocéalo en diferentes páginas y coloca paginación abajo del todo).
    - [ ] Coloca una searchbar para poder buscar por nombre del apartamento. Al colocar algo en la searchbar y darle a buscar se filtrarán los resultados respetando el orden y el resto de filtros si los hubiese.
    - [ ] El usuario ha de poder ordenar el listado por "Mejor valorados" manteniendo el resto de filtros. 
    - [ ] El usuario ha de poder ordenar el listado por "Mayor número de comentarios" manteniendo el resto de filtros.
    - [ ] Existe una opción para ver el Top 10. Esto desmarcaría cualquier otro filtro y mostraría en el listado solo los 10 más valorados.Z

## Reglas

Estas son las reglas : 

    - No se permiten métodos de más de 15 líneas.
    - No pueden haber ficheros javascript de más de 100 líneas.
    - Piensa bien cual va a ser la estructura de tus ficheros y de tu lógica. Intenta dividir los ficheros y módulos en cosas lógicas, por ejemplo: destina un módulo como el encargado de manipular el DOM, destina otro como el encargado de descargar los datos y guardar una copia del original , etc etc ...
    - No inventes la rueda, tira de bootstrap todo lo que puedas, el diseño no tiene porque ser clavado ni parecido al 50% al de trivago, usa lo máximo que puedas bootstrap y no gastes más de 1 hora maquetando. 


### Extras

Como opcionales : 

    - [ ] Simula mediante promesas y setTimeout que existe una petición a un servidor al ir a recoger los datos cuando se cambia de página.
    - [ ] Tu estilo cumple con las reglas de ESLint. 
    - [ ] Añade filtros para solo ver apartamentos con más de X valoración de media como en trivago.
    - [ ] Permite al usuario marcar como favorito un apartamento y guarda dicha información en localStorage.
    - [ ] Guarda el estado de los filtros y searchbar en localStorage para que al recargar la página se recuperen dichos datos.
