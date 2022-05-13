const projects = [
  {
    id: 'hash1',
    name: 'Lebes',
    category: 'Sistema de redes de Varejo',
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/03/a9/54/03a9544e-6ae5-2d64-842e-95177b61ebd0/source/512x512bb.jpg',
    createdAt: '00-00-0000',
    description: 'descrição teste'
  },
  {
    id: 'hash2',
    name: 'StarBem',
    category: 'Aplicativo de saúde',
    logo: 'https://starbem.app/img/icon-512.png',
    createdAt: '00-00-0000',
    description: 'descrição teste'
  },
  {
    id: 'hash3',
    name: 'RD RaiaDrogasil',
    category: 'Sistema de redes de Farmácia',
    logo: 'https://s3-symbol-logo.tradingview.com/raiadrogasilon--600.png',
    createdAt: '00-00-0000',
    description: 'descrição teste'
  },
  {
    id: 'hash4',
    name: 'Digio',
    category: 'Aplicativo Financeiro',
    logo: 'https://www.iq.com.br/wp-content/uploads/2018/11/logodigio-1024x1024.png',
    createdAt: '00-00-0000',
    description: 'descrição teste'
  }
]

// Simulate api route 'get by id'
const findProjects = prop => projects.find(project => project.id === prop)

export { projects, findProjects }
