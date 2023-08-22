require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const Blog = require('./models/blog')

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(result => {
        console.log(result)
      response.json(result)
    })
})

app.post('/api/blogs', (request, response) => {
    console.log(request.body)
  const blog = new Blog({
    title: request.body.title,
    author: request.body.author,
    url: request.body.url,
    likes: request.body.likes
  })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})