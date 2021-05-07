# pull image
FROM node:14
# set working directory
WORKDIR /usr/src/app
# add node modules to path
ENV PATH /app/node_modules/.bin:$PATH
# install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . .
# start app
CMD ["npm", "start"]