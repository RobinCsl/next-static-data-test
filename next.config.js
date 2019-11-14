module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return dev ? {} : {
      '/': { page: '/' },
      '/1': { page: '[no]', query: { title: 'hello-nextjs 1', no: 1 } },
      '/2': { page: '[no]', query: { title: 'hello-nextjs 2', no: 2 } },
      '/42': { page: '[no]', query: { title: 'hello-nextjs 42', no: 42 } },
    }
  },
}
