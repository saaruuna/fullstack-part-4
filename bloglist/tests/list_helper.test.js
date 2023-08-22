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
})
