
FROM nginx:latest
ARG kafka_url=local
ENV kafka_url ${kafka_url}
WORKDIR /usr/share/nginx/html
COPY . .
RUN ["sh", "env.sh"]