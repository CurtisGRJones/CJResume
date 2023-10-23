FROM node:16.20-alpine
WORKDIR /app

COPY ./dist .

EXPOSE 3000
CMD ["npx", "http-server", ".", "--proxy", "http://localhost:3000?", "--port", "3000"]