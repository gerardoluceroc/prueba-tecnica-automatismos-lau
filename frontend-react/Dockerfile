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

# Compila la aplicación
RUN npm run build

# Expone el puerto 4173, que es el puerto predeterminado de Vite para servir la aplicación
EXPOSE 4173

# Comando para iniciar la aplicación en modo de producción
CMD ["npm", "run", "preview"]
