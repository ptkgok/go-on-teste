const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images: {
    disableStaticImages: true
  }
})

module.exports = { typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},}