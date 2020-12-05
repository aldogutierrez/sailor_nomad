# Take common NodeJS version
FROM node:12

# Frontend has "./sailor" as the working directory
WORKDIR /sailor

# We need to add node_modules to the environment path
ENV PATH /sailor/node_modules/.bin:$PATH

# Take care of the application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Copy the current directory <final version> of the application
COPY . ./

# Start the frontend
CMD ["yarn", "start"]
