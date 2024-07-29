# Usa una imagen base de Node.js 19
FROM node:19

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 5173, que es el puerto predeterminado de Vite para servir la aplicación
EXPOSE 5173

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev"]
