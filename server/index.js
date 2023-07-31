const express = require('express')

const app = express()
const PORT = 3001

app.use(express.urlencoded())
app.use(express.json())

let data = {
   'January': {

   }, 'February': {

   }, 'March': {}, 'April': {}, 'May': {}, 'June': {}, 'July': {}, 'August': {}, 'September': {}, 'October': {}, 'November': {}, 'December': {}
}

const calendarDays = { 'January': 31, 'February': 28, 'March': 31, 'April': 30, 'May': 31, 'June': 30, 'July': 31, 'August': 31, 'September': 30, 'October': 31, 'November': 30, 'December': 31 }

for (let i in data) {
   for (let j = 1; j < calendarDays[i] + 1; j++) {
      let num = j
      data[i][num] = []
   }
}


app.get('/api', (req, res) => {
   let { month, day, text, from, to, type, id, index } = req.query;
   if (type == 'post') {

      from = (!(from == '') && !from && from == null) ? 0 : from;
      to = (!(to == '') && !to && to == null) ? 0 : to;
      if (from > 23) {
         from = 23
      } else if (from < 0) {
         from = 0
      }

      if (to > 23) {
         to = 23
      } else if (to < 0) {
         to = 0
      }

      if (day > calendarDays[month]) {
         day = calendarDays[month]
      } else if (day < 1) {
         day = 1
      }

      let id = Date.now().toString(36) + Math.random().toString(36).substr(2);
      data[month][day].push({ text: text, from: from, to: to, id: id })
      console.log('post /api')
      res.sendStatus(201)

   } else if (type == 'get') {

      console.log('get /api')
      console.log(data)
      res.json(data)

   } else if (type == 'del') {

      console.log('del /api')
      let delIndex = 0;
      data[month][day].forEach((item, index) => {
         if (item.id == id) {
            delIndex = index
         }
      })
      data[month][day].splice(delIndex, 1)
      res.json(data)

   } else if (type == 'edit') {

      console.log('edit /api')
      data[month][day][index].text = text
      data[month][day][index].from = from
      data[month][day][index].to = to
      res.json(data)

   }
})

app.listen(PORT, () => {
   console.log(`http://localhost:${PORT}`)
})