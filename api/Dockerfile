# Usa una imagen base oficial de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /api

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
