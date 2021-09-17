

const Mock = require('mockjs')
// get mock.Random
const Random = Mock.Random
// mock one statistic
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mockPic'), // Random.dataImage( size, text) generates a random Base64 image encoding
      author_name: Random.cname(), // Random.cname() Randomly generate a common Chinese name
      date: Random.date() + ' ' + Random.time() // Random.date() indicates the format of the generated date string, the default is yyyy-MM-dd; Random.time() returns a random time string
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}
// Intercept ajax requests, configure mock data
Mock.mock('/api/articles', 'get', produceNewsData)
