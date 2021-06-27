FROM node:latest
RUN mkdir -p /app/proj2
WORKDIR /app/proj2
COPY package*.json /app/proj2/
RUN npm install
COPY . /app/proj2
EXPOSE 4444
CMD [ "npm","run","dev" ]