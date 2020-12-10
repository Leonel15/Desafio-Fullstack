export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Produtos',
    icon: 'floppy',
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
  },
  {
    text: 'Nota Fiscal',
    icon: 'floppy',
    items: [
      {
        text: 'Cadastrar',
        path: '/nota-fiscal/add'
      },
      {
        text: 'Listar',
        path: '/nota-fiscal/listar'
      },
    ]
  }
];
