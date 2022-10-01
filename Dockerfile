# stage1 - build react app first 
FROM node:16.17.0-alpine3.15 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.21.6-alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]