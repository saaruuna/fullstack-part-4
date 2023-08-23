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

    test('verify uid is named id', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body[0].id).toBeDefined()
    })

    test('posting blog works', async () => {
        const payload = {
          "title": "How to DIY 3",
          "author": "Ada Lovelace",
          "url": "www.howtodiy.net",
          "likes": 45,
        } 

        const postResponse = await api
        .post('/api/blogs')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(201)

        const getResponse = await api.get('/api/blogs')

        const ids = getResponse.body.map(blog => blog.id)
        const titles = getResponse.body.map(blog => blog.title)
        const authors = getResponse.body.map(blog => blog.author)
        const urls = getResponse.body.map(blog => blog.url)
        const likes = getResponse.body.map(blog => blog.likes)

        expect(getResponse.body).toHaveLength(initialBlogs.length + 1)
        expect(ids).toContain(postResponse.body.id)
        expect(titles).toContain(postResponse.body.title)
        expect(authors).toContain(postResponse.body.author)
        expect(urls).toContain(postResponse.body.url)
        expect(likes).toContain(postResponse.body.likes)
    })

    afterAll(async () => {
      await mongoose.connection.close()
    })
})