FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install --prod
EXPOSE 3000
CMD ["node", "src/server/server.js"]
