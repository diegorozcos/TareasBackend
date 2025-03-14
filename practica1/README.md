# API con Node.js, Express, TypeScript y MongoDB

## Descripción
Para esta práctica, se realizó una API con Node.js, Express, TypeScript y MongoDB. Incluye autenticación con JWT, gestión de usuarios como administrador y publicaciones con relaciones entre colecciones.

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/diegorozcos/TareasBackend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno (consultar archivo de ejemplo):

```env
MONGO_URI=<YOUR_MONGO_URI>
JWT_SECRET=<YOUR_SECRET_KEY>
PORT=<YOUR_PORT>
```

4. Compilar TypeScript:

```bash
npm run build
```

5. Ejecutar la API:

```bash
npm run start
```

---

## Estructura del Proyecto
```
/public
    /src
    |__ config
    |   |__ database.ts
    |__ controllers
        |__ authController.ts
        |__ postController.ts
        |__ userController.ts
    |__ middlewares
        |__ authMiddleware.ts
        |__ userMiddleware.ts
    |__ models
        |__ user.ts
        |__ post.ts
    |__ routes
        |__ authRoutes.ts
        |__ postRoutes.ts
        |__ userRoutes.ts
    |__ types
        |__ httpStatus.ts
    |__ server.ts
```
---

## Endpoints

### Autenticación
- **POST /signup**: Registro de usuario
- **POST /login**: Inicio de sesión
- **GET /profile**: Obtención de usuario y contraseña de usuario autenticado 

### Usuarios (solo accesible para admin)
- **POST /users**: Crear un usuario
- **GET /users**: Listar usuarios
- **GET /users/:id**: Obtener un usuario por ID
- **PUT /users/:id**: Actualizar un usuario por ID
- **DELETE /users/:id**: Eliminar un usuario por ID

### Publicaciones (protegidas por middleware de autenticación)
- **POST /posts**: Crear una nueva publicación de un usuario autenticado
- **GET /posts**: Listar todas las publicaciones de un usuario autenticado

---

## Flujo esperado de peticiones con en Postman
### Autenticacion
1. Crear una cuenta utilizando `POST /signup`
2. Obtener token mediante `POST /login`
3. Obtener perfil usando el token mediante `GET /profile`

### Administrador
1. Crear un usuario neuvo mediante `POST /users`
2. Obtener lista de usuarios mediante `GET /users`
3. Obtener un solo usuario mediante `GET /users/:id`
4. Actualizar un usuario mediante `PUT /users/:id`
5. Borrar un usuario con `DELETE /users/:id`

### Publicaciones
1. Debes estar autenticado mediante tu token usando `POST /login`
2. Crear una publicación con `POST /posts`
3. Obtener todas las publicaciones del usuario autenticado con `GET /posts`

---

## Comandos Útiles
- `npm run dev`: Ejecutar en modo desarrollo
- `npm run build`: Compilar TypeScript
- `npm run start`: Ejecutar la API

---

## Autor
Diego Arturo Orozco Sánchez