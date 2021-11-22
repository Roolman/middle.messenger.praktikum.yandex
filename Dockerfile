FROM node:14.17-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY dist /app

FROM nginx:1.17.1-alpine
COPY --from=build-step /app /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]