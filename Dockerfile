FROM python:3 as base
WORKDIR /usr/src/app

COPY ./readenv/ .

CMD python3 env.py




FROM nginx:latest
COPY . /usr/share/nginx/html

RUN apt-get update -y
RUN apt-get install python3.6 -y

  
# FROM httpd:latest
# COPY . /usr/local/apache2/htdocs/