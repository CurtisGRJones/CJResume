FROM node:16.20-alpine
WORKDIR /app

COPY ./dist .

EXPOSE 3000
CMD ["npx", "http-server", ".", "--port", "3000"]