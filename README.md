# Cafetería - Gestión de Inventario y Ventas

Este es un software de gestión de inventario y ventas para una cafetería. El proyecto está dividido en dos partes: el **backend** (API) y el **frontend** (interfaz de usuario). A continuación, se explica cómo instalar y configurar cada uno.

## Requisitos previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [PostgreSQL](https://www.postgresql.org/) (instalado y configurado)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instrucciones de instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Configuración del Backend

El backend está basado en **Node.js** con **Express** y utiliza **PostgreSQL** como base de datos. Asegúrate de tener una base de datos PostgreSQL configurada antes de continuar.

#### 2.1. Variables de entorno

En la carpeta `backend`, crea un archivo `.env` y añade las siguientes variables:

```env
PORT=3000
DB_NAME=cafe_products_db
DB_USER=postgres
DB_PASSWORD=javs
DB_HOST=localhost
```

- **PORT**: El puerto en el que correrá el backend.
- **DB_NAME**: Nombre de la base de datos de PostgreSQL.
- **DB_USER**: Usuario de la base de datos.
- **DB_PASSWORD**: Contraseña de la base de datos.
- **DB_HOST**: Host donde está corriendo PostgreSQL (usualmente `localhost` para desarrollo local).

#### 2.2. Instalar dependencias y ejecutar el backend

Ve a la carpeta del backend e instala las dependencias:

```bash
cd backend
npm install
```

Luego, inicia el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará el backend en el puerto definido (por defecto `3000`).

### 3. Configuración del Frontend

El frontend está creado con **Vite** y **React**.

#### 3.1. Variables de entorno

En la carpeta `frontend`, crea un archivo `.env` y añade la siguiente variable:

```env
VITE_API_URL=http://localhost:3000
```

- **VITE_API_URL**: La URL base del backend. En este caso, está corriendo localmente en el puerto `3000`.

#### 3.2. Instalar dependencias y ejecutar el frontend

Ve a la carpeta del frontend e instala las dependencias:

```bash
cd ../frontend
npm install
```

Luego, inicia el servidor de desarrollo del frontend:

```bash
npm run dev
```

Esto iniciará el frontend en un puerto diferente (por defecto, Vite usa el puerto `5173`).

### 4. Base de datos - PostgreSQL

Para que el backend funcione correctamente, debes asegurarte de tener una base de datos de PostgreSQL creada con el nombre, usuario, y contraseña que se especificaron en el archivo `.env`.

1. Inicia sesión en PostgreSQL desde la terminal o tu cliente de base de datos favorito:
   ```bash
   psql -U postgres
   ```
   
2. Crea la base de datos:
   ```sql
   CREATE DATABASE cafe_products_db;
   ```

3. Asegúrate de que las credenciales y la base de datos en el archivo `.env` coincidan con las configuraciones de tu sistema.

### 5. Estructura del Proyecto

```plaintext
.
├── backend                 # API con Express y PostgreSQL
│   ├── src
│   ├── .env                # Variables de entorno del backend
│   └── package.json        # Scripts y dependencias del backend
├── frontend                # Aplicación del cliente con Vite y React
│   ├── src
│   ├── .env                # Variables de entorno del frontend
│   └── package.json        # Scripts y dependencias del frontend
└── README.md               # Instrucciones del proyecto
```

### 6. Scripts disponibles

#### Backend

- `npm run dev`: Inicia el servidor de desarrollo del backend.

#### Frontend

- `npm run dev`: Inicia el servidor de desarrollo del frontend.

### 7. Notas adicionales

- Asegúrate de que el backend esté corriendo antes de iniciar el frontend para que las peticiones a la API funcionen correctamente.
- Puedes modificar las variables de entorno según sea necesario para ajustarlo a tu entorno local o de producción.
- El proyecto está configurado para desarrollo local, por lo que los cambios en los archivos recargarán automáticamente el servidor o la aplicación.

### 8. Contacto

Si tienes alguna pregunta o encuentras algún problema, no dudes en contactar a [tu nombre o tu correo].
```

### Explicación:

- **Variables de entorno**: Asegura que el usuario sepa cómo configurar el archivo `.env` tanto para el frontend como para el backend.
- **Instalación paso a paso**: Guía para instalar dependencias y ejecutar ambos proyectos.
- **Configuración de PostgreSQL**: Instrucciones claras para crear la base de datos necesaria.
- **Estructura del proyecto**: Muestra la estructura de carpetas para que sea fácil de entender.
- **Información sobre los scripts**: Cómo ejecutar ambos proyectos.

Con este README, cualquier persona podrá seguir los pasos y configurar tu proyecto correctamente. ¿Te gustaría agregar o modificar algo más?