# FROM node:18-alpine

# WORKDIR /app

# RUN npm i -g pnpm

# COPY package.json pnpm-lock.yaml ./

# RUN pnpm install

# COPY . .

# RUN pnpm install

# EXPOSE 3000

# CMD ["pnpm", "dev"]

FROM nginx:latest
COPY . /usr/share/nginx/app/
