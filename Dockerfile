FROM node:alpine

COPY ./package.json ./
COPY ./src ./src
RUN npm install
COPY . .
RUN npm run start