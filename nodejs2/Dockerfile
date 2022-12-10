FROM node:19-alpine3.15
#to fix
#RUN addgroup -S app && adduser -S -G app app
#USER app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV SOME_ENV=envv123
EXPOSE 3500
CMD ["npm", "start"]
#ENTRYPOINT ["npm", "run", "dev"]