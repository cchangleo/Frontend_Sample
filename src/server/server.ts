import express = require('express')
const path = require('path')
const app: express.Application = express()
const port = process.env.PORT || 3000
const __dist = path.resolve(__dirname, '../../', 'dist')

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dist + '/index.html')
})
app.use(express.static(__dist))
