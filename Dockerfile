FROM node:buster

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install --legacy-peer-deps

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start
