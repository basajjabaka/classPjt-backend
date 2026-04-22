import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);
export const db: any = drizzle(sql);

// export pool for compatibility with scripts that expect it (neon-http doesn't use a pool)
export const pool: undefined = undefined;
