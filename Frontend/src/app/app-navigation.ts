export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Produtos',
    icon: 'warning',
    items: [
      {
        text: 'Cadastrar',
        path: '/produtos/cadastrar'
      },
      {
        text: 'Listar',
        path: '/produtos/listar'
      }
    ]
  }
];
