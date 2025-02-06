# Usar la imagen oficial de Node.js como base
FROM node:20

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Generar Prisma Client
RUN npx prisma generate

# Generar migraciones
RUN npx prisma migrate dev --name init

# Generar el cliente de Prisma (esto es necesario para interactuar con la DB)
RUN npx prisma generate

# Exponer el puerto de la API
EXPOSE 3000

# Comando para ejecutar la API (usando el código compilado en "dist/")
CMD ["node", "--loader", "ts-node/esm", "dist/main.js"]

