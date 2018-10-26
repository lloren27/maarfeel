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

Al que pediremos información mediante una llamada HTTP.
Despues inyectamos toda la información en el HTML mediante createElement primero  textContent después y para los graficos hemos utilizado Chart.js , mediante la etiqueta canvas y creando el contexto ctx para crear el propio gráfico.

