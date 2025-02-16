# Requisitos

Esta tarea consistió en la creación de 3 endpoints usando la API de NewsAPI para obtener las noticias más recientes de diferentes fuentes y temas.

## Ruta /sources
```
GET http://localhost:3000/api/news/sources
```
## Ruta /top-headlines
```
GET http://localhost:3000/api/news/top-headlines
```
## Ruta /everything
```
GET http://localhost:3000/api/news/everything
```
La primera ruta funciona de esa manera, trayendo las fuentes de las noticias.

La segunda ruta necesita de por lo menos un parámetro, como `country=us`.

La tercera ruta necesita de por lo menos un parámetro, como `q=apple`.

## Ejemplos de uso
```
GET http://localhost:3000/api/news/sources
```
```
GET http://localhost:3000/api/news/top-headlines?country=us
```
```
GET http://localhost:3000/api/news/sources
```

# Correr el proyecto
Usar el comando `npm start` para correr el proyecto en su localhost, dentro de la carpeta de tarea1.