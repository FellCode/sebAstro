FROM node:20-alpine

# Arbeitsordner
WORKDIR /workspace

# Nur package.json kopieren, installieren (Docker layer cache)
COPY package*.json ./
RUN npm ci

# Rest kopieren
COPY . .

EXPOSE 4321

# Default dev command (Astro dev)
CMD ["npm", "run", "dev"]
