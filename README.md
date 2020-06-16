# Mercado libre con React (demo)


## Instalacion

1- git clone https://github.com/estebanzacarias/meli.git <br/>
2-cd meli <br/>
3-npm install && npm start <br/>


## Documentacion
 - /App.js :<br/>
     Con React-router se crean las rutas a las diferentes vistas, en la ruta ("/")  se encuenta la  caja de busqueda mas un listado con todos los productos (primero la categoria que mas tiene)<br/>

 - /components/Search: <br/>
  Aqui se encuentra el componente que se encarga de enviar las peticiones para las busquedas.

 - /components/results: <br/>
  Es donde se realizan los filtros de busqueda.

 - /components/description: <br/>
 Aqui se carga la info de cada productos, y se realizan las consultas.

 - /components/items: <br/>
 En este componente se realiza la primera consulta a la api, pidiendo todos los productos, sin aplicar ningun filtro
