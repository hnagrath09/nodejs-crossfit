FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
COPY package*.json ./
RUN npm install

# Generate Prisma Client from the schema
COPY prisma .
COPY .env .
RUN npx prisma generate

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]