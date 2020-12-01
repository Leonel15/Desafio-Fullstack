const proxy = [
  {
    context: '/produto',
    target: 'http://localhost:8080/produto',
    pathRewrite: {'^/produto' : ''}
  },
  {
    context: '/ronaldinho',
    target: 'http://localhost:8080/produto/list-all'
  }
];
module.exports = proxy;
