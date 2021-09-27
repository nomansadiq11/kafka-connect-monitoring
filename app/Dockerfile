FROM nginx:latest
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

RUN sed -i -e "s|someurl|$kafka|g" config.js


