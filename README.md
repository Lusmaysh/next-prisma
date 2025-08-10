# 🚀 Next-Prisma Starter

**Template** pengembangan cepat untuk aplikasi Next.js dengan integrasi Prisma ORM dan koneksi database siap pakai.

🌐 **Demo/Live:**   
📦 **Repo:** [Lusmaysh/next-prisma](https://github.com/Lusmaysh/next-prisma)

---

## ⏱ Fitur Inti

- Setup rapi menggunakan **Next.js**  
- ORM modern via **Prisma** – keamanan tipe & migrasi database  
- Sinkronisasi sederhana antara API dan database  
- Siap digunakan bersama Next.js API Routes atau framework lainnya

---

## 🛠 Teknologi yang Digunakan

| Teknologi     | Fungsi |
|---------------|--------|
| **Next.js**   | Framework React penuh fitur untuk front-end dan API |
| **Prisma**    | ORM tipe-aman yang mendukung migrasi, validasi, dan kueri SQL |
| **TypeScript** (opsional) | Menerapkan tipe statis untuk keamanan kode |
| **Deployment** | Bisa di-deploy ke Vercel, Netlify, atau platform lainnya |

---

## 📦 Cara Mulai

~~~bash
git clone https://github.com/Lusmaysh/next-prisma.git
cd next-prisma
npm install        # atau yarn install / pnpm install
~~~

1. Siapkan database (PostgreSQL, MySQL, SQLite, dll.)  
2. Tambahkan konfigurasi connection string di file `.env` dengan format:
```
DATABASE_URL="postgresql://..."
```
3. Jalankan migrasi Prisma:
~~~bash
npx prisma migrate dev --name init
~~~
4. Jalankan pengembangan:
~~~bash
npm run dev
~~~
5. Akses `http://localhost:3000`

---

## 📂 Struktur Direktori (contoh)

```
next-prisma/
├── prisma/
│ ├── schema.prisma
│ └── migrations/
├── pages/
│ ├── api/
│ └── index.tsx
├── .env
├── package.json
└── README.md
```

---

## 🔄 Migrasi & Prisma Client

- **Membuat migrasi**:
  ~~~bash
  npx prisma migrate dev --name init
  ~~~

- **Menggunakan Prisma Client**:
  ~~~ts
  import { PrismaClient } from '@prisma/client';
  const prisma = new PrismaClient();
  ~~~

---

## 🤝 Kontribusi & Lisensi

- **Lisensi**: (tambahkan tipe lisensi jika ada, misalnya MIT)  
- **Kontribusi**: Fork repositori → buat branch fitur → ajukan pull request

---

## 📬 Kontak

Pertanyaan? Kolaborasi? Silakan kunjungi profil GitHub saya:  
🔗 [Lusmaysh](https://github.com/Lusmaysh)
