# Use the official Node.js 18 image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

RUN npx prisma generate


# Expose the application port
EXPOSE 8000

# Run the app with ES modules enabled
CMD ["npm", "run", "dev"]