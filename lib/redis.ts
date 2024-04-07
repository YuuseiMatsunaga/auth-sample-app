import { Context } from "hono"

export const Redis = (c: Context) => {
   const kv = c.env.SESSION_DB 
   
} 