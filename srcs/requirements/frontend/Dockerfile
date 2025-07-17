FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build

RUN mkdir -p dist
RUN cp -r src/* dist/
RUN cp -r public/* dist/
