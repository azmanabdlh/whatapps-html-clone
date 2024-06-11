FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g bun

RUN yarn install

EXPOSE 8181

CMD ["yarn", "serve"]
