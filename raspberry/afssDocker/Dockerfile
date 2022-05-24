#!/usr/bin/env python
FROM python:latest as builder

# установка рабочей директории в контейнере
WORKDIR /app

RUN apt-get -qq update && apt-get -qq install libmariadb-dev unixodbc-dev libffi-dev gcc libc-dev g++ libc-dev libxml2 libasound2-dev

# копирование файла зависимостей в рабочую директорию
COPY requirements.txt .

# установка пакетов pip
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt


FROM python:3.10-slim

# установка рабочей директории в контейнере
WORKDIR /app

# копирование файла зависимостей и установленных библиотек
COPY --from=builder /app/wheels /wheels
COPY --from=builder /app/requirements.txt .

# распаковка библиотек
RUN pip install --no-cache /wheels/*

# установка библиотеки звука
RUN apt-get -qq update  &&  apt-get -qq install libasound2-dev

# копирование скриптов и звуков
COPY  afss.py .
COPY  timer.py .
COPY  sounds/. sounds/


# команда, выполняемая при запуске контейнера
ENTRYPOINT  [ "python", "afss.py" ]