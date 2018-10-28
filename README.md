Para desarrollar esta vista , he utilizado los siguientes recursos:

- data.json --> donde estan guardados los datos que se quieren mostrar. 
- index.html --> donde se encuentra el html que muestra el navegador.
- script.js ---> Archivo Javascript donde se cargan las funciones que va a necesitar para renderizar los datos. 
- styles.css ---> Archivo donde se indican los estilos a implantar en cada tag , class o id. 

Lo primero que realice fue instalar el JSON Server para crear una full fake REST API , realizando los siguiente:

npm install -g json-server

y después en la carpeta donde tenemos el JSON realizamos :

json-server --watch data.json

Así levantamos un server al que podremos acceder desde :

http://localhost:3000/data

Al que pedire la información mediante una llamada HTTP.
Despues inyectó toda la información en el HTML mediante createElement primero y textContent después , para los graficos he utilizado Chart.js , mediante la etiqueta canvas y creando el contexto ctx para crear el propio gráfico.

Para que cupieran bien en la pantalla le otorgue un 33% de width a cada uno de los articles dentro de la section. 

los articules se creearon gracias a la interación del bucle for que itera y crea dependiendo del numero de datos que posea el JSON. 

En cuanto al diseño la unica pega que encontre es que el dato central no me lo coloca en el centro , el ctx.fillText funciona correctamente pero , es decir crea el elemento , ya que si creo un punto de interrupción para debuguear en la linea 74 del script.js y avanzas la ejecución del codigo , ves como se crean , pero después al crear los gráficos , estos superponen al texto central. 

No he podido aplicar TEST UNITARIOS , ya que no domino todavia como hacerlo y no me dio tiempo a investigar sobre ello. 


-------------------ENGLISH----------------------

To develop this view, I have used the following resources:

- data.json -> where the data you want to display is stored.
- index.html -> where is the html that shows the browser.
- script.js ---> Javascript file where are the functions that will need to render the data.
- styles.css ---> File where the styles of a label implanted in each, class or id are indicated.

The first thing we did was to install the JSON server to create a complete fake REST API, doing the following:

npm install -g json-server

and then in the folder where we have the JSON we made:

json-server --watch data.json

This will raise a server that we can access from:

http://localhost:3000/data

To which I requested the information through an HTTP call.
Then I injected all the information into the HTML by creating Element first and Text contained later, for the graphics I used Chart.js, using the tag canvas and creating the ctx context to create the graph itself.

For what fit well on the screen is given 33% of width to each of the items within the section.

The articles were created thanks to the interference of the loop for the creation and development of the number of data that the JSON has.

As for the design, the only one that finds that the central data does not place it in the center, the ctx.fillText works correctly but, that is, it creates the element, since I create a break point to debug on line 74 of the script .js and you advance The execution of the code, the voices as they are created, but after creating the graphics, they superimpose the central text.

UNIT TESTS can not be applied, since I still do not know how to do it and I did not have time to investigate about it.
