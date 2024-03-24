# Anyaa's Full Stack Challenge

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Setup your environment:

Copy the `.env.example` file to `.env`:

```shellscript
cp .env.example .env
```

Install dependencies:

```shellscript
npm install
```

Run the Vite dev server:

```shellscript
npm run dev
```

### Prisma

This template includes Prisma for database access.
When updating your `prisma/schema.prisma`, you'll need to run:

```shellscript
npm run generate
```

To view the Prisma Studio, run:

```shellscript
npx prisma studio
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
