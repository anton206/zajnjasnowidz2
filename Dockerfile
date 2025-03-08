FROM node:21-slim AS build
COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

FROM node:21-slim

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

EXPOSE 3000
WORKDIR /app
CMD [ "node", "build" ]