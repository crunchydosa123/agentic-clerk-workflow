FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 8000
EXPOSE 8000

# Run the dev script
CMD ["npm", "run", "dev"]
