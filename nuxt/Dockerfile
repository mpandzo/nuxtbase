# Dockerfile
FROM node:16.18-alpine

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# Expose the port 3000
EXPOSE 8002

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8002

# Set the default command to run when a container starts
CMD [ "yarn", "dev" ]

# create destination directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
RUN chown -R node:node /home/node/app

# Install app dependencies
COPY package.json /home/node/app
RUN yarn

COPY . /home/node/app
