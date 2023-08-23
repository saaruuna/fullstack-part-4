const listHelper = require('../utils/list_helper')

describe('list_helper', () => {
  test('dummy returns one', () => {
    const blogs = []
  
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })

  test('totalLikes returns total likes', () => {
    const blogs = [
        {
            title: "Blog 1", 
            author: "Author 1", 
            url: "www.blog1.com", 
            likes: 4
        }, 
        {
            title: "Blog 2", 
            author: "Author 1", 
            url: "www.blog1.com", 
            likes: 3
        }, 
    ]

    expect(listHelper.totalLikes(blogs)).toBe(7)
  })
  
  test('favoriteBlog returns most liked', () => {
    const veryLiked = {title: "Blog 3", author: "Author 1", url: "www.blog1.com", likes: 12} 
    const blogs = [
        {
            title: "Blog 1", 
            author: "Author 1", 
            url: "www.blog1.com", 
            likes: 4
        }, 
        {
            title: "Blog 2", 
            author: "Author 1", 
            url: "www.blog1.com", 
            likes: 3
        }, 
        veryLiked
    ]

    expect(listHelper.favoriteBlog(blogs)).toEqual(veryLiked)
  })
  
  test('mostBlogs returns author with most blogs', () => {
    const prolific = {
        author: "David Cronenberg",
        blogs: 3
    }

    const blogs = [
        {
            title: "Blog 1", 
            author: "David Cronenberg", 
            url: "www.blog1.com", 
            likes: 4
        }, 
        {
            title: "Blog 2", 
            author: "David Cronenberg", 
            url: "www.blog1.com", 
            likes: 3
        }, 
        {
            title: "Blog 3", 
            author: "David Cronenberg", 
            url: "www.blog1.com", 
            likes: 3
        }, 
        {
            title: "Blog 2", 
            author: "Quentin Tarantino", 
            url: "www.blog1.com", 
            likes: 3
        }, 
        {
            title: "Blog 2", 
            author: "Quentin Tarantino", 
            url: "www.blog1.com", 
            likes: 3
        }, 
    ]

    expect(listHelper.mostBlogs(blogs)).toEqual(prolific)
  })

  test('mostBlogs returns author with most blogs', () => {
    const liked = {
        author: "David Cronenberg",
        likes: 210
    }

    const blogs = [
        {
            title: "Blog 1", 
            author: "David Cronenberg", 
            url: "www.blog1.com", 
            likes: 4
        }, 
        {
            title: "Blog 2", 
            author: "David Cronenberg", 
            url: "www.blog1.com", 
            likes: 200
        }, 
        {
            title: "Blog 3", 
            author: "David Cronenberg", 
            url: "www.blog1.com", 
            likes: 6
        }, 
        {
            title: "Blog 2", 
            author: "Quentin Tarantino", 
            url: "www.blog1.com", 
            likes: 5
        }, 
        {
            title: "Blog 2", 
            author: "Quentin Tarantino", 
            url: "www.blog1.com", 
            likes: 3
        }, 
    ]

    expect(listHelper.mostLikes(blogs)).toEqual(liked)
  })
})
