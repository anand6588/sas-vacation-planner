FROM --platform=linux/amd64 node:18-alpine as build
RUN apk add --no-cache libc6-compat

RUN corepack enable

WORKDIR /app

COPY ./ ./
RUN yarn install

WORKDIR /app

RUN yarn build

EXPOSE 8080

CMD yarn start
