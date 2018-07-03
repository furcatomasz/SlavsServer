FROM php:7.2.6-cli-alpine
ARG TIMEZONE

MAINTAINER Tomasz Furca <furcatomasz@gmail.com>

RUN apk --update add grep

# Set timezone
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone
RUN printf '[PHP]\ndate.timezone = "%s"\n', ${TIMEZONE} > /usr/local/etc/php/conf.d/tzone.ini
RUN "date"

# Type docker-php-ext-install to see available extensions
RUN docker-php-ext-install pdo pdo_mysql mysqli pcntl

WORKDIR /var/www/app
