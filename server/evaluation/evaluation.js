const express = require('express')
const app = express()
const router = express.Router()
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const storage = multer.diskStorage({
  destination: './',
  filename: function(req, file, cb) {
    cb(null, 'title-img-' + Date.now() + path.extname(file.originalname))
  },
})

app.use(cors())
app.use(bodyParser.json())

const upload = multer({
  storage: storage,
  limits: { fileSize: '10MB' },
  destination: function(req, file, cb) {
    cb(null, '')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  },
})

router.post('/', upload.single('description'), (req, res) => {
  function callName(req) {
    const image = req.file.filename
    const spawn = require('child_process').spawn
    const process = spawn('python3', ['__main__.py', image])

    process.stdout.on('data', function(data) {
      const number = data
        .toString()
        .split(' ')[0]
        .replace(/\s|\[|\]/g, ' ')

      parseFloat(number)
      const preResult = number * 100
      const result = preResult.toFixed(2)

      if (result > 80) {
        res.json('Die Ausweretung ist zu ' + result + ' % negativ')
      } else {
        const newResult = 100 - result
        res.json('Die Ausweretung ist zu ' + newResult + ' % positiv')
      }
    })
  }
  callName(req)
  console.log(req.file.filename)
})

module.exports = router
