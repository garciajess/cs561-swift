// Jessica Garcia
// CS 561

const express = require('express')
const app = express()
const port = 5000

app.get('/data/2.5/weather', (req, res) => {
  res.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":300.66,"feels_like":300.35,"temp_min":299.37,"temp_max":302.63,"pressure":1012,"humidity":39},"visibility":10000,"wind":{"speed":4.92,"deg":26,"gust":6.71},"clouds":{"all":0},"dt":1664659447,"sys":{"type":2,"id":2005452,"country":"US","sunrise":1664633455,"sunset":1664675654},"timezone":-25200,"id":5720727,"name":"Corvallis","cod":200})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




