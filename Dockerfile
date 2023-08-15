FROM node:18

WORKDIR /usr/src/front
COPY build/ /usr/src/front/

RUN npm install -g serve

EXPOSE 3000
CMD [ "serve", "-s", "/usr/src/front" ]
