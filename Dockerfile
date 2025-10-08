FROM node:18-alpine
RUN mkdir -p /app/node_modules
WORKDIR /app
# Pre-populate node_modules to simulate the issue
RUN echo "existing content" > /app/node_modules/existing.txt
