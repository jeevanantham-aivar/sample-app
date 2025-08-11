# Use official Node.js 18 Alpine image for small size
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install only production dependencies
COPY package.json ./
RUN npm install --only=production

# Copy application code
COPY app.js ./

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]