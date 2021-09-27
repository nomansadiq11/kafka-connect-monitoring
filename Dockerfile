FROM python:3 as base
WORKDIR /usr/src/app

COPY ./readenv/ .

CMD python3 env.py



FROM nginx:latest
COPY . /usr/share/nginx/html

COPY --from=base /usr/src/app/config.js /usr/share/nginx/html