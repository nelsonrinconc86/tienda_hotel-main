# Usamos una imagen oficial de Node.js ligera
FROM node:20-alpine

# Creamos y nos movemos a la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código de la aplicación
COPY . .

# Exponemos el puerto en el que corre tu app (por ejemplo, el puerto 3000 o el que use tu app)
EXPOSE 3000

# Comando para iniciar la aplicación (asegúrate de que coincida con tu "start" en package.json)
CMD ["npm", "start"]