FROM node:12.18-slim

RUN mkdir /react_hello_world
WORKDIR /react_hello_world

COPY ./start-exec.sh /react_hello_world/

ENTRYPOINT ["./start-exec.sh"]
