# The Wild Oasis — Hotel Management Dashboard

The Wild Oasis is the **internal back-office / hotel management application** used by staff to run the day-to-day operations of "The Wild Oasis" hotel. It is a single-page React application that reads from and writes to the **same Supabase database** used by the public-facing Wild Oasis website, where guests browse cabins and book their stays. In other words, this app is the admin panel: when a guest books a stay on the customer website, that booking instantly shows up here for staff to manage (confirm, check in, check out, etc.), and any cabin or pricing changes made here are immediately reflected on the public site.

## ✨ Features

- **Dashboard** — At-a-glance stats (bookings, sales, check-ins, occupancy) with charts for sales and stay duration over a selectable time period (last 7/30/90 days).
- **Bookings management** — Browse, filter, sort and paginate all bookings; view full booking details (guest, cabin, dates, price, status); delete bookings.
- **Check-in / Check-out** — Dedicated flow to check guests in (with optional breakfast add-on and payment confirmation) and check them out.
- **Cabins management** — Full CRUD for cabins (name, capacity, price, discount, description) including image upload/storage.
- **Settings** — Hotel-wide configuration such as minimum/maximum booking nights, maximum guests per booking, and breakfast price.
- **User (staff) management & authentication** — Secure login for employees, ability for existing staff to create new staff accounts, update account details/password, and upload an avatar.
- **Dark mode** — App-wide light/dark theme toggle.
- **Protected routes** — The entire dashboard is only accessible to authenticated staff; unauthenticated users are redirected to the login page.

## 🧱 Tech Stack

| Area                                   | Technology                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------------ |
| UI library                             | [React 18](https://react.dev/)                                                       |
| Build tool / dev server                | [Vite](https://vitejs.dev/)                                                          |
| Routing                                | [React Router v6](https://reactrouter.com/)                                          |
| Server state / data fetching & caching | [TanStack React Query v4](https://tanstack.com/query/v4) (+ React Query Devtools)    |
| Styling                                | [styled-components](https://styled-components.com/)                                  |
| Forms                                  | [React Hook Form](https://react-hook-form.com/)                                      |
| Charts                                 | [Recharts](https://recharts.org/)                                                    |
| Notifications                          | [react-hot-toast](https://react-hot-toast.com/)                                      |
| Icons                                  | [react-icons](https://react-icons.github.io/react-icons/)                            |
| Dates                                  | [date-fns](https://date-fns.org/)                                                    |
| Backend-as-a-Service                   | [Supabase](https://supabase.com/) (PostgreSQL database, Authentication, and Storage) |
| Linting                                | ESLint                                                                               |

## 🗂️ Project Structure

The app follows a **feature-based** folder structure under `src/`:

```
src/
├── context/        # React context (e.g. dark mode)
├── data/            # One-off scripts/data used to seed the Supabase database
├── features/        # Feature folders (authentication, bookings, cabins, check-in-out, dashboard, settings)
├── hooks/           # Shared custom hooks
├── pages/           # Top-level route components
├── services/        # Supabase API calls (apiAuth, apiBookings, apiCabins, apiSettings)
├── styles/          # Global styles
├── ui/              # Reusable, generic UI components
└── utils/           # Helpers and constants
```

## 🗄️ Database

This application does **not** have its own backend — it connects directly to a shared **Supabase** project (PostgreSQL + Auth + Storage) that also powers the public customer-facing booking site. The main tables are:

- `cabins` — cabin inventory, pricing and images
- `bookings` — reservations created by guests on the public site and managed here
- `guests` — guest profiles associated with bookings
- `settings` — hotel-wide booking rules (min/max nights, max guests, breakfast price)

Because both applications share one database, **Row Level Security (RLS) policies in Supabase are what separate "public guest" access from "authenticated staff" access** — there is no separate server layer enforcing permissions.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- A Supabase project (with the `cabins`, `bookings`, `guests` and `settings` tables set up, matching schema with the companion customer-facing site)

### Installation

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root (see [Before Going Public](#-before-going-public) below for why this matters):

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_KEY=your-supabase-anon-key
```

### Available scripts

```bash
npm run dev       # Start the Vite dev server
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

### Deployment

The repo includes config for both **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml`), each configured to rewrite all routes to `index.html` to support client-side routing.

### !TESTING USER!

email: test@test.com
password: test1234
