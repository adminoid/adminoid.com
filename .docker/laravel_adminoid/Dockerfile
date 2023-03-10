# Dockerfile
FROM php:7.4.33

ADD . /site_adminoid

VOLUME ["/site_adminoid"]

WORKDIR /site_adminoid

RUN ls -la > /site_adminoid/ll1.txt
RUN pwd > /site_adminoid/ll2.txt

ADD .docker/laravel_adminoid/entrypoint.sh .
RUN chmod +x ./entrypoint.sh
RUN sh -c ./entrypoint.sh

EXPOSE 8080
