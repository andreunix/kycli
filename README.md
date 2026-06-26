# Kycli

Kycli is a small CLI for Kysely projects. It provides config loading, migrations, seeds, SQL execution, and database type generation without an ORM/model layer.

## Install

```bash
bun add github:andreunix/kycli
```

Import Kycli config helpers from `kycli`; import Kysely classes and types from `kysely`:

```ts
import { PostgresDialect } from "kysely"
import { defineConfig } from "kycli"
```

## Commands

```bash
bunx kycli init
bunx kycli migrate make create_users
bunx kycli migrate latest
bunx kycli migrate rollback
bunx kycli seed make initial_data
bunx kycli seed run
bunx kycli sql "select 1"
bunx kycli gen:types
bunx kycli gen:types database
```

## Config

`kycli.config.ts` lives in the project root. `kysely.config.ts` is also accepted.

```ts
import { PostgresDialect } from "kysely"
import { defineConfig } from "kycli"
import { Pool } from "pg"

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
  typegen: {
    source: "migrations",
  },
  migrations: {
    migrationFolder: "migrations",
  },
  seeds: {
    seedFolder: "seeds",
  },
})
```

## Type Generation

`gen:types` writes:

- `src/db/types.ts`

It reads migration files by default. Use `database` when you want generated types to reflect the live database schema.

## Supported Dialects

- `pg`
- `mysql2`
- `tedious`
- `better-sqlite3`
- `pglite`
- `postgres`
- `bun`
- `@neondatabase/serverless`
- `@prisma/ppg`

## Development

```bash
bun test
bun run typecheck
bun run build
```
