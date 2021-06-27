FROM node:latest
RUN mkdir -p /app/proj1
WORKDIR /app/proj1
COPY package*.json /app/proj1/
RUN npm install
COPY . /app/proj1
EXPOSE 3333
CMD [ "npm","run","dev" ]