
FROM nginx:latest
# ARG kafka_url=local
ENV kafka_url "someurl"
WORKDIR /usr/share/nginx/html
COPY . .

# ENTRYPOINT ["/usr/share/nginx/html/env.sh"]
# CMD ["sh", "/usr/share/nginx/html/env.sh"]
# RUN ["sh", "env.sh"]