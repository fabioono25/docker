FROM python:3.6
LABEL maintainer 'Fabio Ono'

#concatenar diversos comandos - parte cache gerado sera utilizado proximas 
RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

USER www
VOLUME /log
WORKDIR /app

ENTRYPOINT [ "/usr/local/bin/python" ]
CMD [ "run.py" ]