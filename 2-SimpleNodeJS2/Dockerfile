# image: node:latest
FROM node

# set the working directory
WORKDIR /app

# first parameter: source, second parameter: destination
# COPY . ./
# COPY . /app

# optimization: copy only the package.json file
COPY package.json /app

# install the dependencies
RUN npm install

# optimization: copy the rest of the files
COPY . /app

# expose the port. Note: this is not the same as the port in the server.js file
# not needed for the app to run, but it is a good practice to include it
EXPOSE 80

# set the default execution command
CMD ["node", "server.js"]