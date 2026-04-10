# Rewards App

A full-stack rewards & settings web application built with **React + TypeScript** (frontend) and **NestJS** (backend).

## Screenshots

### Login Page

![Login Page](docs/screenshots/login.png)

> **To capture this screenshot:** open `http://localhost:5173` in your browser and take a screenshot, then save it as `docs/screenshots/login.png`.

### Settings — Profile

![Settings](docs/screenshots/settings-light.png)

---

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React 19, TypeScript, Vite, React Router |
| Backend  | NestJS, TypeORM, SQLite, JWT Auth   |
| Fonts    | Borel (headings), Open Sans (body)  |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### 1. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Start the backend

```bash
cd backend
npm run start:dev
```

The API runs at **http://localhost:3001/api**.

### 3. Start the frontend

```bash
cd frontend
npm run dev
```

The app runs at **http://localhost:5173**.

### 4. Create an account

There are no seeded users. Click **Join Now** on the login page to register with any email, name, and password (min 6 chars).

## Project Structure

```
├── backend/
│   └── src/
│       ├── auth/          # JWT auth (login, register, guards)
│       ├── users/         # User entity & service
│       ├── app.module.ts  # Root module (TypeORM + SQLite)
│       └── main.ts        # Bootstrap (port 3001, CORS)
├── frontend/
│   └── src/
│       ├── context/       # AuthContext (token, user state)
│       ├── pages/
│       │   ├── LoginPage.tsx      # Split-screen login/register
│       │   └── DashboardPage.tsx  # Settings panel (profile, appearance, notifications, privacy)
│       ├── services/      # Axios API client
│       └── index.css      # Global styles
└── README.md
```

## Features

- **Login / Register** — split-screen layout with background image and form card
- **Settings Dashboard** — sidebar navigation with four sections:
  - **Profile** — view name and email
  - **Appearance** — functional dark mode toggle
  - **Notifications** — email, push, and promotional toggles
  - **Privacy & Security** — change password
- **Dark Mode** — full theme switch (pink background, white text)
- **JWT Authentication** — secure token-based auth with bcrypt password hashing

## Color Palette

| Color        | Hex       | Usage                    |
| ------------ | --------- | ------------------------ |
| Soft Pink    | `#E8A0BF` | Buttons, accents, avatar |
| Deep Rose    | `#C4507A` | Headings, labels         |
| Warm Yellow  | `#F5D49E` | Dark mode toggle accent  |
| Sky Blue     | `#7EC8E3` | Decorative accents       |
| Light Cream  | `#FFF5EE` | Page backgrounds         |
