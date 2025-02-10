FROM node:22-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Firebase CLIをグローバルインストール
RUN npm install -g firebase-tools

# ソースコードをコンテナ内にコピー
COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
