FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# default value is still hardcoded. Solution: using built-time arguments
# ENV PORT 80
ARG DEFAULT_PORT=80
ENV PORT=$DEFAULT_PORT
# EXPOSE 80
EXPOSE $PORT

# why: to store the data in the host machine
# advantage: data is not lost when the container is removed
VOLUME [ "/temp" ]

# CMD ["node", "server.js"]
CMD ["npm", "start"]