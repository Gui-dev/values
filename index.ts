import { App } from '@shared/infra/http/App'

const app = new App().server
const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
