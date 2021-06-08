FROM node:14-alpine
ENV APP_ROOT /web
#ENV NODE_ENV production
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]
