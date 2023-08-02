const module = {
  prop: 'my prop',
  config: {
    language: 'en',
    cache: true
  },
  setConfig: conf => {
    module.config = conf
  },
  isCacheEnabled: () => {
    console.log(module.config.cache ? 'Yes' : 'No')
  }
}