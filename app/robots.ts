export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://procraft-closets.vercel.app/sitemap.xml',
  }
}