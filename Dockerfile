FROM node:17-alpine3.14

WORKDIR /app
COPY package*.json .
COPY ./static ./static
RUN npm install

COPY . .

RUN npm run build && npm prune --production


FROM node:17-alpine3.14

WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json .

ENV PORT 6565
EXPOSE 6565

CMD ["node", "build"]