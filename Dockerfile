FROM node:14-alpine
ENV APP_ROOT /web
#ENV NODE_ENV production
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm audit fix --force
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]
