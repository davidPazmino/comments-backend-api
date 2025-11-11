# comments-backend-api

Servicio Node.js con Express que expone `GET /api/comments` y delega la obtención de datos en el servicio backend-data.

## Variable de entorno

- `BACKEND_DATA_URL`: URL base del servicio backend-data. Ejemplo: `http://backend-data:8080`.

## Instalación y ejecución local

```bash
npm install
BACKEND_DATA_URL=http://localhost:8081 npm start
```

## Construcción de la imagen Docker

```bash
docker build -t comments-backend-api:latest .
```

```bash
docker run -p 8080:8080 -e BACKEND_DATA_URL=http://host.docker.internal:8081 comments-backend-api:latest
```

## Push la imagen Docker
Ejecuta este comando y usa tus credenciales de Docker Hub:

```bash
docker login
```

```bash
docker tag comments-backend-api:latest dpazmino6215/comments-backend-api:latest
docker push dpazmino6215/comments-backend-api:latest
```
