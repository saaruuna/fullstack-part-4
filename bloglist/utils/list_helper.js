const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
    const likeSum = blogs.map((blog) => blog.likes).reduce((a, b) => a + b, 0)
    return likeSum
}

const favoriteBlog = (blogs) => {
    const mostLikes = blogs.reduce((most, blog) => most.likes > blog.likes ? most : blog);
    return mostLikes
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}