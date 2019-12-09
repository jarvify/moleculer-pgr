FROM node:12-alpine 

RUN apk update \
    && apk add ca-certificates wget \
    && update-ca-certificates
RUN apk --no-cache add build-base python git

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json .
COPY patches patches
RUN npm i 

USER root
RUN apk del build-base git
USER node

CMD ["/bin/echo 'Docker build done'"]

