# --- 1. AŞAMA: Derleme (Build) ---
FROM node:20-alpine AS builder
WORKDIR /app

# Sadece bağımlılık dosyalarını kopyala
COPY package*.json ./
# Tüm paketleri kur (TypeScript derleyicisi dahil)
RUN npm install

# Kaynak kodları kopyala ve JS'e çevir
COPY . .
RUN npm run build

# --- 2. AŞAMA: Çalıştırma (Runtime) ---
FROM node:20-alpine
WORKDIR /app

# Sadece production paketlerini kur
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Sadece builder aşamasında oluşan 'dist' klasörünü kopyala
# (Not: Build çıktın 'build' klasöründeyse 'dist' yerine 'build' yaz)
COPY --from=builder /app/dist ./dist

EXPOSE 8000

# Uygulamayı derlenmiş JS üzerinden başlat
CMD ["node", "dist/index.js"]