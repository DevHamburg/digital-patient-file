const multer = require('multer')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const app = express()
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.post('/', upload.single('avatar'), async (req, res) => {
  try {
    const col = await loadCollection(COLLECTION_NAME, db)
    const data = col.insert(req.file)

    db.saveDatabase()
    res.send({
      id: data.$loki,
      fileName: data.filename,
      originalName: data.originalname,
    })
  } catch (err) {
    res.sendStatus(400)
  }
})

module.exports = router
