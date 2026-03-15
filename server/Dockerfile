FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 8000
# Dosya adın app.js olduğu için burayı güncelledik
CMD ["node", "app.js"]