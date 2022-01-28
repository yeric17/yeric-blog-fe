FROM node:14.15.0 as build

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

RUN npm run build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM node:14.15.0

WORKDIR /app
COPY --from=build /app/build ./build
# COPY --from=build /app/package.json ./package.json
COPY . .


EXPOSE 3000
CMD ["node", "build"]