import 'dotenv/config'
import postgres from "postgres";


const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;

export const sql = postgres(URL, { ssl: 'require'})

