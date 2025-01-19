# Credit Card Validator System

Este proyecto es una solución completa para validar tarjetas de crédito y débito, verificar su estado (funcional o no funcional), y separar tarjetas según tipo. Incluye un backend con Node.js y MySQL, y un frontend que interactúa con el backend.

## 🚀 Características
- Validación de tarjetas de crédito y débito.
- Conexión con una base de datos MySQL para verificar y separar datos.
- Integración con GitHub Pages para el frontend y AWS/Google Cloud para el backend.

---

## 🛠️ Requisitos previos
1. **Node.js** (v14 o superior)
2. **MySQL**
3. **Git** (para control de versiones)
4. **Docker** (opcional, para contenedores)
5. **AWS CLI** / **Google Cloud CLI** (según el despliegue que elijas)

---

## 📂 Estructura del Proyecto

project-root/

```

├── src/
│   ├── api/
│   │   ├── cardValidation.js           # Lógica para validar tarjetas
│   │   └── balanceService.js            # Lógica para consultar saldos
│   ├── db/
│   │   └── dbConfig.js                  # Configuración de la base de datos MySQL
│   ├── manualInput/
│   │   ├── manualCardValidation.js      # Validación de tarjetas manualmente
│   │   ├── cardDataSeparator.js         # Separación de tarjetas de débito y crédito
│   │   └── functionalStatus.js          # Determinación de funcionalidad
│   ├── utils/
│   │   └── requestHandler.js            # Manejo de peticiones HTTP
│   └── index.js                         # Punto de entrada principal del proyecto
├── config/
│   ├── config.js                        # Configuración global
├── package.json                         # Dependencias y scripts
├── .gitignore                           # Archivos ignorados en git
└── README.md                            # Documentación

```

2. Instalar dependencias

Navega al directorio raíz del proyecto y ejecuta:

npm install

3. Configurar la base de datos

Crea una base de datos MySQL llamada credit_cards e importa el archivo SQL inicial (si se proporciona):
```
mysql -u <tu_usuario> -p credit_cards < schema.sql
```
4. Configurar variables de entorno

Crea un archivo .env en el directorio raíz y define las credenciales:
```
MYSQL_HOST=<tu_host>
MYSQL_USER=<tu_usuario>
MYSQL_PASSWORD=<tu_contraseña>
MYSQL_DATABASE=credit_cards
```
5. Ejecutar localmente

Inicia el backend:
```
npm start
```
El backend estará disponible en http://localhost:3000.

unknowd
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
dist/
build/
.env

# Logs
logs/
*.log
pids/
*.pid
*.seed
*.pid.lock

# Editor y SO
.DS_Store
Thumbs.db
*.swp
*.swo
.vscode/
.idea/

# Docker
.dockerignore
docker-compose.override.yml

# Git
.gitignore

Si utilizas Docker o configuraciones específicas, añade las reglas necesarias.

---

## 📂 Estructura del Proyecto
```
project-root/
├── src/
│   ├── api/
│   │   ├── cardValidation.js           # Lógica para validar tarjetas
│   │   └── balanceService.js            # Lógica para consultar saldos
│   ├── db/
│   │   └── dbConfig.js                  # Configuración de la base de datos MySQL
│   ├── manualInput/
│   │   ├── manualCardValidation.js      # Validación de tarjetas manualmente
│   │   ├── cardDataSeparator.js         # Separación de tarjetas de débito y crédito
│   │   └── functionalStatus.js          # Determinación de funcionalidad
│   ├── utils/
│   │   └── requestHandler.js            # Manejo de peticiones HTTP
│   └── index.js                         # Punto de entrada principal del proyecto
├── config/
│   ├── config.js                        # Configuración global
├── package.json                         # Dependencias y scripts
├── .gitignore                           # Archivos ignorados en git
└── README.md                            # Documentación

```

---

## ⚙️ Configuración del Proyecto

### 1. Clonar el repositorio
Clona el repositorio en tu máquina local:

bash

```
git clone https://github.com/<TU-USUARIO>/<TU-REPOSITORIO>.git
cd <TU-REPOSITORIO>
```
2. Instalar dependencias

Navega al directorio raíz del proyecto y ejecuta:
```
npm install
```
3. Configurar la base de datos

Crea una base de datos MySQL llamada credit_cards e importa el archivo SQL inicial (si se proporciona):
```
mysql -u <tu_usuario> -p credit_cards < schema.sql
```
4. Configurar variables de entorno

Crea un archivo .env en el directorio raíz y define las credenciales:
```
MYSQL_HOST=<tu_host>
MYSQL_USER=<tu_usuario>
MYSQL_PASSWORD=<tu_contraseña>
MYSQL_DATABASE=credit_cards
```
5. Ejecutar localmente

Inicia el backend:
```
npm start
```
El backend estará disponible en http://localhost:3000.

🌐 Despliegue
Frontend en GitHub Pages

    Navega al directorio frontend/ y sube los archivos HTML, CSS y JavaScript al repositorio de GitHub.
    Activa GitHub Pages:
        Ve a Settings > Pages.
        Selecciona la rama main y el directorio /frontend.
    Tu frontend estará disponible en https://<TU-USUARIO>.github.io/<TU-REPOSITORIO>/.

🌐 Despliegue
Frontend en GitHub Pages

    Navega al directorio frontend/ y sube los archivos HTML, CSS y JavaScript al repositorio de GitHub.
    Activa GitHub Pages:
        Ve a Settings > Pages.
        Selecciona la rama main y el directorio /frontend.
    Tu frontend estará disponible en https://<TU-USUARIO>.github.io/<TU-REPOSITORIO>/.

Backend en AWS

    Base de datos MySQL: Configura una instancia de MySQL en AWS RDS.
    Deploy del Backend:
        Configura un Elastic Beanstalk o utiliza una instancia de EC2.
        Sube los archivos del backend al servidor y asegúrate de instalar las dependencias:

        npm install
        npm start

    Tu backend estará accesible en una URL similar a https://<tu-backend>.elasticbeanstalk.com.

Backend y Frontend en Google Cloud Run

    Configurar Google Cloud:
        Instala el CLI de Google y autentícate:

    gcloud init

Base de datos MySQL: Configura Google Cloud SQL y usa sus credenciales en .env.

#Dockerizar el backend:

Construye la imagen Docker:
    
```
docker build -t gcr.io/<PROJECT-ID>/credit-card-validator.

```

#Desplegar en Google Cloud Run:

gcloud run deploy credit-card-validator \
```
--image gcr.io/<PROJECT-ID>/credit-card-validator \
```
```
--platform managed

```
Tu aplicación completa estará accesible en una URL como https://<app>.run.app.

📂 Archivos Adicionales

    .gitignore: Para excluir archivos sensibles como node_modules/ y .env.
    schema.sql: Para inicializar la base de datos.

🛡️ Notas de Seguridad

    Nunca subas el archivo .env o credenciales sensibles al repositorio público.
    Configura una política de seguridad en tu hosting (como AWS o Google Cloud) para limitar el acceso a la base de datos y al backend.
