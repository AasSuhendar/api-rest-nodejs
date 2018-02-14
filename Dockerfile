# base used
FROM node:8.9.0
# maintainer
MAINTAINER Aas Suhendar <aas.suhendar@gmail.com>

# Cached layer for node modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app \
  && cp -a /tmp/node_modules /usr/src

# Add project files
WORKDIR /usr/src/app
ADD . /usr/src/app

# update node_module, and change permission
RUN rm -rf node_modules \
  && mv /usr/src/node_modules /usr/src/app/ \
  && mkdir logs \
  && chmod -R 775 logs

# expose port
EXPOSE 3000

# RUN command
CMD ["npm","start"]
