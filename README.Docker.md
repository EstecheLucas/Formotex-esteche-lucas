Formotex API — Docker Compose

- Requisitos
  - Docker y Docker Compose instalados


- Levantar el entorno
  - `docker compose up --build`
  - La API queda disponible en `http://localhost:3000`.

- Base de datos y Prisma
  - Aplicar migraciones dentro del contenedor de la API:
    - `docker compose exec api npx prisma migrate dev --name init`



- Comandos útiles
  - Ver logs: `docker compose logs -f api`
  - Apagar: `docker compose down`

