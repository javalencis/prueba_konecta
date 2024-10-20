# Gestión de Inventario y Ventas - Prueba Konecta

El proyecto está dividido en dos partes: el **backend** (API) y el **frontend** (interfaz de usuario). A continuación, se explica cómo instalar y configurar cada uno.

## Requisitos previos

- [Node.js](https://nodejs.org/) 
- [PostgreSQL](https://www.postgresql.org/) (instalado y configurado)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instrucciones de instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/javalencis/prueba_konecta.git
cd prueba_konecta
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

Los valores DB_USER y DB_PASSWORD deben ser los configurados en su entorno local en PostgreSQL

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

El HOST debe coincidir con el valor DB_HOST y el puerto con PORT según las variables de entorno del .env creado en la carpeta backend

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

Para que el backend funcione correctamente, debes asegurarte de tener una base de datos de PostgreSQL creada con el nombre, usuario, y contraseña que se especificaron en el archivo `.env` de la carpeta backend.

1. Inicia PostgreSQL desde la terminal o desde pgAdmin 4:
   
2. Crea la base de datos ```sql cafe_products_db``` o el nombre puesto en DB_NAME
  
3. Asegúrate de que las credenciales y la base de datos en el archivo `.env` coincidan con las configuraciones de tu sistema.

### 5. Notas adicionales

- Asegurar de que el backend esté corriendo antes de iniciar el frontend para que las peticiones a la API funcionen correctamente.
- Puedes modificar las variables de entorno según sea necesario para ajustarlo a tu entorno local.

