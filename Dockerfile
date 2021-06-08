FROM node:14-alpine
RUN apk add --update \
  python \
  python-dev \
  py-pip \
  build-base \
  git \
  openssh-client \
&& pip install virtualenv \
&& rm -rf /var/cache/apk/*

ENV APP_ROOT /web
ENV NODE_ENV production
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
#RUN npm audit fix --force
RUN ls -a
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]
