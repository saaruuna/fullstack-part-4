const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
    const likeSum = blogs.map((blog) => blog.likes).reduce((a, b) => a + b, 0)
    return likeSum
}

module.exports = {
  dummy,
  totalLikes
}