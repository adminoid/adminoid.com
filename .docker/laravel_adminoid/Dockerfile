# Dockerfile
FROM php:7.4.33

ADD . /site_adminoid

VOLUME ["/site_adminoid"]

WORKDIR /site_adminoid

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y openssl zip unzip git vim

RUN apt-get install default-mysql-client -y
RUN docker-php-ext-install pdo pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#ADD .docker/laravel_adminoid/entrypoint.sh .
#RUN chmod +x ./entrypoint.sh
#RUN sh -c ./entrypoint.sh

#CMD php artisan serve
#ENTRYPOINT ["/site_adminoid/entrypoint.sh"]

#CMD php artisan migrate --seed \
#    && php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000
