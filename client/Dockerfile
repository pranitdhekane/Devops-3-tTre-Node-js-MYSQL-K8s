FROM node:27.0.0-alpha.0.1.1-trixie-slim AS build
WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

# stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]


