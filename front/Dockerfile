FROM node:alpine3.15
RUN mkdir /mywiki/
RUN mkdir /mywiki/front

WORKDIR /mywiki/front/
COPY ./mywiki .

WORKDIR /mywiki/front/mywiki

RUN npm install --location=global npm@8.12.1
RUN npm install node
EXPOSE 3000

CMD ["npm", "start"]