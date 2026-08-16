/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Hobi Knows | AI & Global Trade Insights',
  author: 'Hobi',
  headerTitle: 'Hobi Knows',
  description: 'AI tools, automation, and practical workflows for global trade and business professionals by Hobi.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://tailwind-nextjs-starter-blog-wine.vercel.app',
  siteRepo: 'https://github.com/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: 'hjlee2020@gmail.com',
  github: 'https://github.com',
  x: '',
  facebook: '',
  youtube: 'https://youtube.com/@HobiKnows',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
