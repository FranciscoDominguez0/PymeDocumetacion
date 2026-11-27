# ==========================================
# 1. Etapa de Construcción (Node.js Alpine)
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar manifiestos e instalar dependencias
COPY package*.json ./
RUN npm ci || npm install

# Copiar código fuente y compilar la documentación
COPY . .
RUN npm run build

# ==========================================
# 2. Etapa de Producción (Nginx Alpine)
# ==========================================
FROM nginx:alpine

# Copiar los archivos estáticos generados por VitePress a Nginx
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
