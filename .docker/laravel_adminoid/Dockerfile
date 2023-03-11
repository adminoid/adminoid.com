# Dockerfile
FROM php:7.4.33

ADD . /site_adminoid

VOLUME ["/site_adminoid"]

WORKDIR /site_adminoid

#RUN apt-get update
#RUN apt-get install -y vim

#RUN ls -la > /site_adminoid/ll1.txt
#RUN pwd > /site_adminoid/ll2.txt

#ADD .docker/laravel_adminoid/entrypoint.sh .
#RUN chmod +x ./entrypoint.sh
#RUN sh -c ./entrypoint.sh

#CMD php artisan serve
#ENTRYPOINT ["/site_adminoid/entrypoint.sh"]

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000
