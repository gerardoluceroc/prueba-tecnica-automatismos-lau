# Prueba técnica de Automatismos lau
Prueba técnica de la empresa automatismos lau.
* Objetivo: Crear una Aplicación Web que permita ingresar Personas a una Base de Datos y que estas puedan ser
visualizadas a través del navegador en un formato de Tabla de Datos, donde a su vez se puedan ejecutar
acciones CRUD como Crear, Editar, Eliminar.

## Prerequisitos
* Utilizar el sistema operativo Ubuntu 22.04
* [Instalar Docker](https://www.hostinger.es/tutoriales/como-instalar-y-usar-docker-en-ubuntu)
* [Instalar Java 17](http://codigoelectronica.com/blog/instalar-java-17-en-ubuntu)

## Resumen
Se ha desarrollado una API Rest con Java Spring Boot (usando Java 17 y Maven) que se conecta con una base de datos MySQL. Esta API se despliega con Docker y se mapea al puerto 8080 tanto interno como externo (ver docker-compose.yaml). 

En cuanto al frontend, se utiliza React junto a vite, todo esto utilizando Node.js en su versión 19. Para crear y estilar la mayoría de los componentes se utilizó la bilbioteca MaterialUI. Esta aplicación se ejecuta en el puerto 5173. 

## Desplegar ejercicio

Primeramente, es necesario crear el archivo .jar para la API de Spring Boot, por lo que debe ingresar a este directorio.

```bash
cd spring-backend
```
Luego, debe crear el archivo .jar

```bash
./mvnw install -DskipTests
```

Luego de esto, puede volver al directorio principal.
```bash
cd ..
```

Finalmente, proceda a desplegar el ejercicio desarrollado utilizando Docker Compose con el siguiente comando.

```bash
docker compose up -d
```

Para acceder al catálogo desarrollado, en caso de desplegarse en un ambiente local, solo basta con ingresar la siguiente URL.
```text
http://localhost:5173
```
