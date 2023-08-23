const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
    const likeSum = blogs.map((blog) => blog.likes).reduce((a, b) => a + b, 0)
    return likeSum
}

const favoriteBlog = (blogs) => {
    const mostLikes = blogs.reduce((most, blog) => most.likes > blog.likes ? most : blog, {})
    return mostLikes
}

const mostBlogs = (blogs) => {
    const blogsByAuthor = {}

    for (const blog of blogs) {
        if (blogsByAuthor[blog.author]) {
            blogsByAuthor[blog.author].blogs = blogsByAuthor[blog.author].blogs + 1
        } else {
            blogsByAuthor[blog.author] = {author: blog.author,  blogs: 1}
        }
    }

    const mostBlogs = Object.values(blogsByAuthor).reduce((most, author) => most.blogs > author.blogs ? most : author, {})
    return mostBlogs
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}