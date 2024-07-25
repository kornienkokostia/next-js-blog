import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDir = path.join(process.cwd(), 'posts')

export const getPostData = (postId) => {
  const postSlug = postId.replace(/\.md$/, '')
  const filePath = path.join(postsDir, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    slug: postSlug,
    ...data,
    content
  }
}

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir)
  return postFiles.filter(el => el.endsWith('.md')).map(el => getPostData(el)).sort((a, b) => a.date > b.date ? -1 : 1)
}

export const getFeaturedPosts = () => getAllPosts().filter(el => el.isFeatured)
