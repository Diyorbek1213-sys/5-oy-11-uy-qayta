module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",  
    "./index.html",  
    "./js/**/*.js",
    "./css/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}