# --- 1. Aşama: Build ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Tüm paketleri kur (devDependencies dahil)
RUN npm install
COPY . .
# Eğer TypeScript kullanıyorsan build komutunu buraya ekle:
# RUN npm run build

# --- 2. Aşama: Runtime ---
FROM node:20-alpine
WORKDIR /app

# Sadece production için gereken dosyaları builder'dan kopyala
COPY --from=builder /app/package*.json ./
# Sadece gerekli (production) paketleri kur ve cache'i temizle
RUN npm install --omit=dev && npm cache clean --force

# Uygulama kodlarını kopyala (Veya sadece 'dist' klasörünü)
COPY --from=builder /app .

EXPOSE 8000
# Geliştirme modu (dev) yerine direkt node ile çalıştır
CMD ["node", "index.js"]