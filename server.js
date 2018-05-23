import express from 'express'

const app = express()

app.use(express.static('./dist'))

app.listen(3005, () => {
  console.log('PokeES6 Running on port 3005')
})
