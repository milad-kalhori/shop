# 🚀 Express + TypeScript + Prisma + PostgreSQL + Bun Starter

A modern backend starter project built with [Express](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), [Prisma](https://www.prisma.io/), and [Bun](https://bun.sh/). This stack provides a fast and type-safe foundation for building robust APIs.

---

## 📦 Tech Stack

- ⚡ **Bun** — ultra-fast JavaScript runtime
- 🌐 **Express** — minimalist web framework for Node.js/Bun
- 🧠 **TypeScript** — type-safe JavaScript at scale
- 🔄 **Prisma** — next-gen ORM for PostgreSQL and other DBs
- 🐘 **PostgreSQL** — powerful open-source relational database

---

## 📁 Project Structure

```
.
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   └── repository.ts/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── .env
├── bun.lockb
├── tsconfig.json
├── README.md
└── package.json (managed by Bun)
```

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

Create a `.env` file and set your database connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=3000
```

### 4. Setup Prisma

```bash
bunx prisma generate
bunx prisma migrate dev --name init
```

### 5. Run the project

```bash
bun run dev
```

---

## 🧪 Scripts

| Script              | Description                          |
|---------------------|--------------------------------------|
| `bun run dev`       | Start development server with Bun    |
| `bun run build`     | Compile TypeScript                   |
| `bun run start`     | Run compiled output                  |
| `bunx prisma studio`| Visual database editor               |

---

## 📬 API Endpoints

(Coming soon – add Swagger link or list endpoints here)

---

## 📌 Notes

- Bun replaces both `npm` and `ts-node` with better performance
- Prisma handles database migrations and schema sync
- Works great with Docker or Railway for deployment

---

## 👨‍💻 Author

Made with ❤️ by [Milad Kalhori](https://github.com/milad-kalhori)

---

## 📄 License

[MIT](LICENSE)
