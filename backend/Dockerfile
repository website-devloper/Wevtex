# Use a lightweight Node.js 24 image
FROM node:24-alpine AS build

# Install build dependencies
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    libtool \
    nasm \
    libpng-dev \
    vips-dev \
    git \
    python3 \
    make \
    g++

# Set working directory
WORKDIR /opt/

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
WORKDIR /opt/app
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Production image
FROM node:24-alpine

# Install vips for sharp
RUN apk add --no-cache vips-dev

# Set working directory
WORKDIR /opt/app

# Copy built application from build stage
COPY --from=build /opt/node_modules ./node_modules
COPY --from=build /opt/app ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=1337

# Expose the Strapi port
EXPOSE 1337

# Start the application
CMD ["npm", "run", "start"]
