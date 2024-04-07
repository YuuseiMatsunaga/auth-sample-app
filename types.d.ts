import 'hono'
import Session from './lib/session'

declare module 'hono' {
  interface Context {
    session: Session
  }
}