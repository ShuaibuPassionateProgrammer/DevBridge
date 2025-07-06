# DevBridge

**DevBridge** is a modern full-stack boilerplate that leverages **Laravel 12** as a powerful, API-only backend and **Next.js** for building a fast, responsive frontend. This project provides a clean separation between backend and frontend layers, promoting modular development, scalability, and high performance.

---

## 🔧 Tech Stack

- **Backend:** Laravel 12 (API-only)
- **Frontend:** Next.js (React)
- **API Format:** REST (JSON)
- **Authentication:** [Optional – Add info if using Sanctum, Passport, JWT, etc.]

---

## 📁 Project Structure

devbridge/
├── api/ # Laravel 12 backend (API only)
│ ├── app/
│ ├── routes/
│ └── ...
├── frontend/ # Next.js frontend (UI)
│ ├── pages/
│ ├── components/
│ └── ...


---

## 🚀 Getting Started

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- npm or yarn
- MySQL / PostgreSQL (or preferred database)

---

### Backend (Laravel API)

```bash
cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```
