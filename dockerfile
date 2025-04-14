# This is a Dockerfile for a Node.js application
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json /

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . /

# Build the application, this step is executed at build time
# and it's output will be used in the next step
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
# This command is executed when the container starts
CMD ["npm","start"]