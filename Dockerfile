FROM node:13-slim

ENV NODE_ENV=production
ENV APP_NAME=web
WORKDIR /app

COPY package.json yarn.lock tsconfig.json /app/

RUN yarn install --production=false --ignore-scripts

COPY ./public /app/public
COPY ./src /app/src

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]