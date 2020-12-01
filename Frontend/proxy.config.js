const proxy = [
  {
    context: '/produto',
    target: 'http://localhost:8080/produto',
    pathRewrite: {'^/produto' : ''}
  }
 ];
module.exports = proxy;
