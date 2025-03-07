# Autenticación con JWT en Node.js, Express y TypeScript

Este proyecto es una API básica en Node.js con Express y TypeScript que implementa autenticación basada en **JSON Web Tokens (JWT)**.

## 🚀 Características
- Endpoint **`/login`**: Recibe un correo y una contraseña para generar un token JWT.
- Endpoint **`/perfil`**: Protegido con middleware que valida el token.
- Uso de **dotenv** para manejar variables de entorno.
- Estructura **MVC** organizada.
- Implementado con **TypeScript**.

---

## 📂 Estructura del Proyecto
```
📁 tarea2
│--📁 node_modules
│--📁 src
│   │--📁 controllers
│   │   ├── authController.ts
│   │   ├── profileController.ts
│   │--📁 middleware
│   │   ├── authMiddleware.ts
│   │--📁 model
│   │   ├── userModel.ts
│   │--📁 routes
│   │   ├── index.ts
│   ├── server.ts
│-- .env
│-- .gitignore
│-- package.json
│-- tsconfig.json
```

---

## 📦 Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/diegorozcos/TareasBackend
   cd tarea2
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Crea un archivo **`.env`** en la raiz del proyecto:
   ```env
   PORT=3000
   JWT_SECRET=supersecreto
   ```
4. Compila TypeScript:
   ```sh
   npx tsc
   ```
5. Inicia el servidor:
   ```sh
   npx nodemon --exec "ts-node src/server.ts"
   ```

---

## 🛠️ Uso con Postman

### 🔐 1. Obtener Token (`POST /api/login`)
- **URL:** `http://localhost:3000/api/login`
- **Body (JSON):**
  ```json
  {
    "correo": "test@example.com",
    "contraseña": "123456"
  }
  ```
- **Respuesta esperada:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
  }
  ```

### 🔒 2. Acceder a perfil (`GET /api/perfil` con token)
- **URL:** `http://localhost:3000/api/perfil`
- **Headers:**
  ```
  Authorization: TU_TOKEN_AQUI
  ```
- **Respuesta esperada:**
  ```json
  {
    "correo": "test@example.com",
    "contraseña": "123456"
  }
  ```

### 🚨 3. Acceder a `/perfil` sin token o con token inválido
- **Respuesta esperada:**
  ```json
  {
    "error": "Acceso denegado. No hay token."
  }
  ```
  o
  ```json
  {
    "error": "Token inválido"
  }
  ```

---

## 📜 Licencia
Este proyecto es de uso académico y fue desarrollado para la materia de Tecnologías de Desarrollo en el Servidor en el ITESO.

💻 **Desarrollado por:** Diego Arturo Orozco Sánchez

