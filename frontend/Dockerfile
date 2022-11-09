# Dockerfile
FROM node:16.18-alpine

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

EXPOSE 8002

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8002
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=8002
ENV HOST=0.0.0.0
ENV PORT=8002
ENV WATCHPACK_POLLING=true

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

# Copy files
COPY . /usr/src/app

# Install app dependencies
RUN yarn

RUN yarn global add nodemon

# Set the default command to run when a container starts
CMD [ "yarn", "dev" ]
