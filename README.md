# Blog Dashboard

This Blog Dashboard is a simple blogging application built with Next.js and styled using Tailwind CSS. It simulates functionalities like viewing posts, filtering by user, adding comments, and deleting comments. Data is fetched from a placeholder API to mimic a backend.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [`/posts`](#posts)
  - [`/posts/[id]`](#postsid)
  - [`/api/posts`](#apiposts)
  - [`/api/users`](#apiusers)
- [Components](#components)
  - [PostCard](#postcard)
  - [CommentForm](#commentform)
  - [CommentList](#commentlist)
- [License](#license)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/blog-dashboard.git

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
