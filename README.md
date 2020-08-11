# Red Social Backend 
Servicio de backend para la aplicación Red Social (MERN Stack).

## Iniciando
La consulta de la API REST, puede hacerse a través del siguiente dominio:
[Demo](https://rickandmorty-b02c4.web.app/).

O bien, puedes clonar el proyecto mediante:
```bash
git remote https://github.com/UlisesGomezDW/SocialRedBackend.git
```

Es necesario instalar las dependencias del proyecto, a través de:
```bash
npm install
```

Para iniciar la ejecución de la aplicación puedes hacerlo a través de:
```bash
npm run go
```

## Endpoints
La aplicación contiene los siguientes endpoints:
- posts
```bash
[GET]: /posts/ //Obtiene todas las publicaciones

[GET]: /posts/:id_post/ //Obtiene una determinada publicación
[POST]: /posts/:id_category/ //Agrega una publicación
[DELETE]: /posts/:id_post/ //Elimina una determinada publicación
```

- categories:
```bash
[GET]: /categories/ //Obtiene todas las categorías
[POST]: /categories/ //Agrega una categoría

[GET]: /categories/:id_category/ //Obtiene una determinada categoría
[PUT]: /categories/:id_category/ //Modifica una determinada categoría
[DELETE]: /categories/:id_category/ //Elimina una determinada categoría
[GET]: /categories/:id_category/posts/ //Obtiene las publicaciones de una determinada categoría
```

## Estructura de archivos
La carpeta ./src es la carpeta raíz de desarrollo. En ella podemos encontrar:
```bash
src:.
│   app.js
│   database.js
│   index.js
│
├───controllers
│       category.controller.js
│       posts.controller.js
│
├───models
│       category.js
│       posts.js
│
└───routes
        category.js
        posts.js
```

- app: Archivo de configuración para la ejecución del proyecto.
- database: Archivo de conexión con la base de datos.
- index: Archivo que ejecuta toda la aplicación.
- controllers: Archivos controladores de las acciones para los métodos del endpoint.
- models: Modelos de las colecciones para la base de datos.
- routes: Archivos de configuración para la asignación de métodos del endpoint a controllers.

## Construido con:
- express
- MongoDB

## Deployment
La aplicación actualmente está siendo ejecutada bajo el servicio de Heroku y esta disponible en: https://frozen-fjord-18489.herokuapp.com/ + ruta del endpoint

## Base de datos
La base de datos está almacenada y ofrece servicio a través de MongoDB Atlas.