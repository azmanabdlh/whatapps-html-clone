FROM node:20-alpine as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn prod:compile

FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
