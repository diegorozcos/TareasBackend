# NewsAPI Express Server

Este proyecto consiste en una API construida con **Node.js** y **Express** que permite obtener noticias en tiempo real desde [NewsAPI](https://newsapi.org/).

## Instalación

1. Clona este repositorio:  
   ```bash
   git clone https://github.com/diegorozcos/TareasBackend.git
   ```
2. Entra en la carpeta del proyecto:  
   ```bash
   cd tarea1
   ```
3. Instala las dependencias necesarias (express, axios, dotenv y nodemon):  
   ```bash
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de NewsAPI:  
   ```env
   NEWS_API_KEY=tu_api_key
   PORT=3000
   ```
5. Inicia el servidor:  
   ```bash
   npm start
   ```
   O con nodemon para desarrollo:  
   ```bash
   npm run dev
   ```

---

## Endpoints

### Obtener fuentes de noticias
- **Ruta:**  
  ```
  GET http://localhost:3000/sources
  ```
- **Descripción:** Obtiene una lista de fuentes de noticias disponibles.

---

### Obtener titulares principales  
- **Ruta:**  
  ```
  GET http://localhost:3000/top-headlines
  ```
- **Descripción:** Devuelve las noticias más importantes.  
- **Parámetros requeridos:** Al menos uno de los siguientes:  
  - `country=us` → Filtra por país (ejemplo: `us`, `mx`, `gb`).  
  - `category=technology` → Filtra por categoría (`business`, `sports`, `entertainment`, etc.).  
  - `sources=bbc-news` → Filtra por una fuente específica.  
  - `q=bitcoin` → Filtra por una palabra clave.  

- **Ejemplo de uso:**  
  ```
  GET http://localhost:3000/top-headlines?country=us&category=technology
  ```

---

### Buscar noticias específicas  
- **Ruta:**  
  ```
  GET http://localhost:3000/everything
  ```
- **Descripción:** Devuelve noticias relacionadas con un término de búsqueda.  
- **Parámetros opcionales:**  
  - `q=tesla` → Busca noticias con la palabra clave "tesla".  
  - `from=2024-02-10` → Filtra noticias desde una fecha específica.  
  - `to=2024-02-14` → Filtra noticias hasta una fecha específica.  

- **Ejemplo de uso:**  
  ```
  GET http://localhost:3000/everything?q=tesla&from=2024-02-10&to=2024-02-14
  ```

---

## Tecnologías usadas
- Node.js  
- Express  
- Axios  
- Dotenv  
- Nodemon (solo en desarrollo)  

---

## 📄 Licencia  
Este proyecto está bajo la licencia MIT.
