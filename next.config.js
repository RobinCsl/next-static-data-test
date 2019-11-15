module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return dev ? {} : {
      '/': { page: '/' },
      '/fr/1': { page: '/[lang]/[no]', query: { title: 'hello-nextjs 1', lang: 'fr', no: 1 } },
      '/fr/2': { page: '/[lang]/[no]', query: { title: 'hello-nextjs 2',lang: 'fr', no: 2 } },
      '/fr/42': { page: '/[lang]/[no]', query: { title: 'hello-nextjs 42', lang: 'fr', no: 42 } },
      '/en/1': { page: '/[lang]/[no]', query: { title: 'hello-nextjs 1', lang: 'en', no: 1 } },
      '/en/2': { page: '/[lang]/[no]', query: { title: 'hello-nextjs 2',lang: 'en', no: 2 } },
      '/en/42': { page: '/[lang]/[no]', query: { title: 'hello-nextjs 42', lang: 'en', no: 42 } },
    }
  },
}
