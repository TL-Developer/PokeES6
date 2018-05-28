const express = require('express')

const app = express()

app.use(express.static('./frontend/dist'))

app.get('*', function(req, res){
  res.redirect('/')
})

app.listen(process.env.PORT || 3005, () => {
  console.log('PokeES6 Running on port 3005')
})
