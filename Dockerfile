FROM node:lts-alpine
WORKDIR /app
COPY "package.json" "./"
ENV NODE_ENV=production
RUN yarn install --production && yarn cache clean
COPY . .

CMD [ "yarn", "run", "stg" ]
