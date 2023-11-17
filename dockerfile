FROM node:18.17.1

# utilisation de pnpm pour installer les dépendances
# pour eviter des erreurs de type timeout avec une connexion lente (comme sur eduroam)
RUN npm install -g pnpm


COPY ./ /var/www/frontend/
WORKDIR /var/www/frontend

RUN pnpm install
ENTRYPOINT pnpm ng serve --host 0.0.0.0 --port 4200

EXPOSE 4200