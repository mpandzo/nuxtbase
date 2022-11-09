# Dockerfile
FROM node:18-alpine

# update and install dependency
RUN apk update && apk upgrade

EXPOSE 8002
EXPOSE 24679

ENV PATH=./node_modules/.bin/:$PATH

RUN apk add --no-cache bash

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8002
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=8002
ENV HOST=0.0.0.0
ENV PORT=8002
ENV WATCHPACK_POLLING=true

# create destination directory
RUN mkdir -p /usr/src/xyz
WORKDIR /usr/src/xyz
# RUN chown -R node:node /usr/src/xyz

# Copy files
COPY . /usr/src/xyz

# Install xyz dependencies
RUN yarn

# Set the default command to run when a container starts
CMD [ "yarn", "dev" ]
