# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "src/server.js"]