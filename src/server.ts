import { app } from './app'
import { env } from './env'

const port = env.PORT || 4000

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port} 🔥`)
})
