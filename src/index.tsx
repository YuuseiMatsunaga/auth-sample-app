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

export default app