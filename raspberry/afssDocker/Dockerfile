#!/bin/sh
#FROM python:3.10-slim-buster
#FROM tiangolo/uwsgi-nginx:python3.6-alpine3.7
#FROM python:3.10
FROM python:latest

# установка рабочей директории в контейнере
WORKDIR /codeы

# копирование файла зависимостей в рабочую директорию
COPY . .

RUN apt-get -qq update && apt-get -qq install libmariadb-dev unixodbc-dev libffi-dev gcc libc-dev g++ libc-dev libxml2 libasound2-dev


# установка зависимостей
RUN pip3 install simpleaudio
RUN pip3 install -r requirements.txt

# копирование содержимого локальной директории src в рабочую директорию


# команда, выполняемая при запуске контейнера
ENTRYPOINT  [ "python", "./afss.py" ]