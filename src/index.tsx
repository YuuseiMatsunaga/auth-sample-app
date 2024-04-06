import { Hono } from 'hono'
import { Top } from '../components/top'

const app = new Hono()

app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return  c.html(<Top messages={messages} />)
})
app.get('/health_check', (c) => {
  return c.text('health_check ok')
})

// GET /login
// ログイン画面

// POST /login, params: email, password
// ログイン処理

// GET /login-complete
// ログイン完了画面

// GET /logout
// ログアウト処理

// GET /signup/email/input
// サインアップ email入力画面

// POST /signup/email/send, params: email
// サインアップ email送信処理

// GET /signup/passcord/input
// サインアップ passcord入力画面

// POST /signup/passcord/verify, params: passcord
// サインアップ passcord verify処理

// GET /signup/password/input
// サインアップ password入力画面

// POST /signup, params: password
// サインアップ処理。この後ログイン画面へ遷移させる

export default app