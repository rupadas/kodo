FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install -g nodemon
# Bundle app source
COPY . .

EXPOSE 3000
ENV NODE_OPTS="--max-old-space-size=3072"
CMD nodemon --inspect ${NODE_OPTS} index.js
#CMD [ "node", "index.js" ]