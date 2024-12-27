FROM node:22-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

CMD ["npm", "run", "dev"]
