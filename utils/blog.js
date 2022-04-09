export function created (blog) {
  const date = new Date(blog.createdAt)
  return date.toLocaleDateString()
}
