# Notes:
# - Node major version must be EXACTLY defined, DO NOT add minor version, e.g.: 20-alpine
# - npm major and minor version must be EXACTLY defined, e.g.: npm@10.4

# 1 - Build Stage
FROM node:20-alpine AS build

RUN apk upgrade --latest --prune --purge --no-cache && npm install --global npm@10.7

WORKDIR /src

COPY package*.json ./
RUN npm ci --no-fund --no-audit

COPY . ./
RUN NODE_ENV=production && npm run build

# 2 - Final Stage
FROM node:20-alpine AS final

RUN apk upgrade --latest --prune --purge --no-cache \
  && unlink /usr/local/bin/npm \
  && unlink /usr/local/bin/npx \
  && rm -rf /usr/local/lib/node_modules/npm/

WORKDIR /app

COPY --from=build ./src/.output ./

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE $PORT

HEALTHCHECK NONE

USER node
CMD ["node", "/app/server/index.mjs"]
