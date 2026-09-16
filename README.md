# 🔗 BitLinks — URL Shortener

**BitLinks** is a fast, minimal URL shortener built with **Next.js, MongoDB, and Tailwind CSS**.

Create short, memorable links from long URLs using a custom short code, store them persistently in MongoDB, and redirect users to the original destination through Next.js dynamic routes.

---

## ✨ Features

- 🔗 Create short links with **custom short codes**
- ⚡ Fast **server-side redirects** using Next.js dynamic routes
- 🗄️ Persistent URL storage with **MongoDB Atlas**
- 🚫 Prevents duplicate short codes
- ✅ Client-side and server-side input validation
- 📋 One-click **copy to clipboard**
- 📱 Responsive UI built with Tailwind CSS
- ⚡ Fast local development with **Turbopack**

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **Next.js** | Full-stack framework & App Router |
| **React** | UI development |
| **JavaScript** | Application logic |
| **Tailwind CSS** | Styling & responsive UI |
| **MongoDB Atlas** | URL persistence |
| **Turbopack** | Development bundler |

---

## 📂 Project Structure

```text
url-shortner/
├── app/
│   ├── [shorturl]/
│   │   └── page.js              # Dynamic redirect route
│   ├── about/
│   │   └── page.js              # About page
│   ├── api/
│   │   └── generate/
│   │       └── route.js         # URL creation API
│   ├── contact/
│   │   └── page.js              # Contact page
│   ├── shorten/
│   │   └── page.js              # URL shortening interface
│   ├── globals.css
│   ├── layout.js
│   └── page.js                  # Home page
├── components/                  # Reusable UI components
├── lib/
│   ├── mongodb.js               # MongoDB connection
│   └── utils.js                 # Utility functions
├── public/                      # Static assets
├── .env.local                   # Environment variables
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- **Node.js 18+**
- A **MongoDB Atlas** account

### 1. Clone the repository

```bash
git clone https://github.com/syedinjamulhaque/URL_Shortner.git
cd URL_Shortner/url-shortner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

> **Important:** Never commit `.env.local` or expose your MongoDB connection string. It should remain excluded through `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🔄 How It Works

BitLinks follows a simple URL-shortening flow:

### 1. Create a short link

The user visits `/shorten` and enters:

- The original URL
- A custom short code

The form sends the data to:

```text
POST /api/generate
```

### 2. Validate and store the URL

The API validates the request and checks MongoDB for an existing short code.

If the short code is available, a document is stored in the `url` collection:

```json
{
  "url": "https://example.com/very/long/path",
  "shorturl": "mycode"
}
```

### 3. Generate the short URL

The user receives a link such as:

```text
http://localhost:3000/mycode
```

### 4. Redirect the user

When someone visits `/mycode`, the dynamic route:

```text
app/[shorturl]/page.js
```

looks up the short code in MongoDB and redirects the visitor to the original URL.

```text
Short URL
   ↓
Next.js Dynamic Route
   ↓
MongoDB Lookup
   ↓
Original URL
   ↓
Redirect
```

---

## 🔌 API Reference

### `POST /api/generate`

Creates a new shortened URL.

#### Request

```json
{
  "url": "https://example.com/some/long/url",
  "shorturl": "mycode"
}
```

#### Responses

| Status | Meaning | Example |
|---|---|---|
| `200` | Short link created successfully | `URL Generated Successfully` |
| `400` | Missing or invalid input | `URL and short URL are required.` |
| `409` | Short code already exists | `URL already exists!` |
| `500` | Server/database error | `Server error` |

### Example with cURL

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com","shorturl":"mycode"}'
```

---

## 🗺️ Future Improvements

The project can be extended with:

- [ ] Automatically generate short codes
- [ ] Click tracking and link analytics
- [ ] Link expiration using MongoDB TTL
- [ ] API rate limiting
- [ ] User authentication
- [ ] Personal link dashboard
- [ ] Edit and delete shortened URLs

---

## 👨‍💻 Author

**Syed Injamul Haque**

- GitHub: [@syedinjamulhaque](https://github.com/syedinjamulhaque)

---
