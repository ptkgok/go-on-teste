const gokers = [
  {
    id: 'hash1',
    name: 'Tulio Calil',
    category: 'Dev React Native',
    pic: '',
    workFrom: 'homeOffice',
    email: 'email@teste.com',
    createdAt: '10-02-2020',
    description: 'lorem ipsum description teste'
  },
  {
    id: 'hash2',
    name: 'Emerson Souza',
    category: 'Tech Leader',
    pic: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.6435-9/92670296_100475114961973_2600604840916680704_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ceVRGoOFo28AX_6Kb6O&_nc_ht=scontent.ffor11-1.fna&uss=bdd8f038c8e0e818&odm=Z29rZGlnaXRhbDg5My53b3JrcGxhY2UuY29t&oe2=60E9AE41&oh=2787476e57acc0a898a2ac802ba199ee&oe=60E5B061',
    workFrom: 'homeOffice',
    email: 'email@teste.com',
    createdAt: '10-02-2020',
    description: 'lorem ipsum description teste'
  },
  {
    id: 'hash3',
    name: 'Patrick Moreira',
    category: 'Dev React Native',
    pic: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.6435-9/186538873_112286761035816_8241026182172578760_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qoEPEgRsZdAAX_YZFJC&_nc_ht=scontent.ffor11-1.fna&uss=7c70aa6dd768e544&odm=Z29rZGlnaXRhbDg5My53b3JrcGxhY2UuY29t&oe2=60EAAB3E&oh=68bc4c7f1f1b49b2d0c31f81e6702a13&oe=60E5B03E',
    workFrom: 'homeOffice',
    email: 'email@teste.com',
    createdAt: '10-02-2020',
    description: 'lorem ipsum description teste',
    conquests: [
      {
        id: 1,
        title: 'Boas vindas',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 2,
        title: 'Veterano',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 1,
        title: 'Embaixador',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 1,
        title: 'Boas vindas',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 2,
        title: 'Veterano',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 1,
        title: 'Embaixador',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 1,
        title: 'Boas vindas',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 2,
        title: 'Veterano',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      },
      {
        id: 1,
        title: 'Embaixador',
        stamp:
          'https://app.qulture.rocks/packs/media/images/conversation-ba38a24a.png'
      }
    ]
  }
]

// Simulate api route 'get by id'
const FindGoker = prop => gokers.find(goker => goker.id === prop)

export { gokers, FindGoker }
