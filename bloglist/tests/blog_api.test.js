const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)
describe("blogs", () => {
    const initialBlogs = [
      {
        "title": "How to DIY",
        "author": "Ada Lovelace",
        "url": "www.howtodiy.net",
        "likes": 900,
        "id": "64e50021e666e05ccb30ca41"
      },
      {
        "title": "How to DIY 2",
        "author": "Ada Lovelace",
        "url": "www.howtodiy.net",
        "likes": 900,
        "id": "64e50035e666e05ccb30ca44"
      }
    ]

    beforeEach(async () => {  await Blog.deleteMany({})  
    let blogObject = new Blog(initialBlogs[0])  
    await blogObject.save()  
    blogObject = new Blog(initialBlogs[1])  
    await blogObject.save()})
    
    test('blogs are returned as json', async () => {
      const response = await api.get('/api/blogs')
      expect(response.body).toHaveLength(initialBlogs.length)
    })

    afterAll(async () => {
      await mongoose.connection.close()
    })
})