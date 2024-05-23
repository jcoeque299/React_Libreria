# Proyecto React

Mi proyecto consiste en una página web para buscar libros, por título o autor, con la posibilidad de añadirlo a una lista de favoritos. Además, la página tiene un foro para conectar con otros usuarios a través de posts

Enlace a la página desplegada: https://mybrary-react.netlify.app/

## Mejoras realizadas

+ Backend y base de datos: Todas las funcionalidades que necesitaban de almacenamiento de datos ahora utilizan una base de datos con una API en lugar de ser guardados en el localstorage del navegador
+ Inicio de sesión y registro: Es posible iniciar sesión y registrarse en la página
+ Favoritos por usuario: Ahora los libros favoritos son individuales por cada usuario registrado, en lugar de ser global
+ Perfiles de usuarios: Se ha implementado la posibilidad de ver perfiles de usuario de otras personas
+ Sistema de amistades: Es posible agregar a otros usuarios como amigos en la página. Esto permitirá ver información sobre este usuario en su página de perfil
+ Mensajería: Implementado sistema de mensajes entre usuarios
+ Valoración de libros: Se ha cambiado el sistema de valoración de forma que ahora se usa uno propio en lugar del sistema de la API de OpenLibrary. Ahora los usuarios podrán valorar los libros con una nota del 1 al 5, y en la página de cada libro se devolverá la media de las notas de todos los usuarios
+ Mejoras en posts y comentarios: Ahora los posts y comentarios muestran el usuario que los ha creado. Hacer click en el nombre del usuario creador de un post o comentario redirigirá a su perfil

## Instrucciones de instalación y configuración

### Frontend

1. Instalar nvm desde el [github de nvm](https://github.com/nvm-sh/nvm), y posteriormente instalar npm usando el comando

    ```nvm install --latest```

2. Instalar las dependencias del proyecto, usando el siguiente comando dentro del directorio del proyecto

    ```npm install```

3. Desplegar el proyecto, con el siguiente comando dentro del directorio del proyecto

    ```npm run dev```

### Backend

Para el uso de esta aplicación es imprescindible instalar y desplegar su backend. De otra forma, casi ninguna sección de la página será usable. Esto también aplica si se usa la página desde el enlace de despliegue, seguirá siendo necesario tener el backend desplegado en localhost. Las instrucciones para su instalación son las siguientes

1. Clonar el [repositorio del backend](https://github.com/jcoeque299/React_backend)

2. Asegurarse de tener todas las dependencias de php instaladas. Se pueden instalar facilmente con el siguiente comando

    ```sudo apt install openssl php-bcmath php-curl php-json php-mbstring php-mysql php-tokenizer php-xml php-zip```

3. Tambien será necesario instalar composer para instalar todas las dependencias del proyecto

    ```sudo apt install composer```

4. Instalar todas las dependencias usando composer, usando el siguiente comando desde dentro del directorio del proyecto

    ```composer install```

5. Una vez instalado todo, será necesario configurar las variables de entorno para que el backend pueda acceder a la base de datos. Se deberá abrir el archivo .env.example y cambiar los siguientes parámetros por estos valores

    ```
    DB_CONNECTION=mysql 
    DB_HOST=127.0.0.1 
    DB_PORT=6033 
    DB_DATABASE=app_db 
    DB_USERNAME=root 
    DB_PASSWORD=my_secret_password
    ```

Si .env.example no existe al instalar el proyecto, copia todo el contenido [del siguiente ejemplo](https://github.com/platformsh-templates/laravel/blob/master/.env.example) en el archivo .env, y posteriormente cambia los parámetros indicados

6. Para poder utilizar el backend es necesario desplegar la base de datos, para eso, ejecutar el siguiente comando desde el directorio del proyecto

    ```docker compose up -d```

7. A continuación, hay que crear todas las tablas en la base de datos, mediante el siguiente comando

    ```php artisan migrate```

8. Por último, desplegar el backend con el siguiente comando

    ```php artisan serve```
