# Use an official Node.js runtime as a base image
FROM node:18.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port that your Next.js application will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
