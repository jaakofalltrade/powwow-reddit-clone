FROM python:3.7

LABEL maintainer="jaakofalltrade"

# Environment variables
ENV PYTHONUNBUFFERED 1

# Install requirements/dependencies
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

# Copy project
RUN mkdir /app
WORKDIR /app
COPY . /app