FROM node:lts

WORKDIR /src
ENV PYTHONIOENCODING=UTF-8

# Define timezone
ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Set the locale
RUN apt-get update -y && \
    apt-get install -y zip locales && \
    sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Cleaning
RUN rm -rf /var/lib/apt/lists/* && \
    apt-get autoremove -y --purge

ADD docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY ./src /src

RUN docker-entrypoint.sh install

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["run"]

