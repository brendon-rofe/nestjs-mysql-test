# Use the official Node.js v14 image as a base
FROM node:14

# Install FFmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Nest.js API in production mode
CMD ["npm", "run", "start:dev"]
