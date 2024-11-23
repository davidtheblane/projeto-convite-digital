import type { Evento } from '../evento'
import { Id } from '../shared'

const eventos: Evento[] = [
  {
    id: "de624e24-c70e-46c9-947b-ffb0b452dc54",
    alias: 'evento-fullstack',
    senha: 'senha123',
    nome: 'Evento de Desenvolvimento Fullstack',
    data: new Date('2024-12-01T10:00:00Z'),
    local: 'São Paulo, SP',
    descricao:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    imagem: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
    imagemBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    publicoEsperado: 200,
    convidados: [
      {
        id: "6851bd56-33e5-4ffe-ab61-7998e086ef79",
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "f7b14046-041a-490e-8ace-ba88d22c62da",
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "2d72d7a2-18e8-4e2f-8a3e-314e894d8231",
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  // {
  //   id: "2d72d7a2-18e8-4e2f-8a3e-314e894d8231",
  //   alias: 'evento-js-avancado',
  //   senha: 'js2024',
  //   nome: 'Workshop Avançado de JavaScript',
  //   data: new Date('2024-11-20T15:00:00Z'),
  //   local: 'Rio de Janeiro, RJ',
  //   descricao: 'Um workshop avançado para programadores JavaScript.',
  //   imagem: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
  //   imagemBackground:
  //     'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
  //   publicoEsperado: 100,
  //   convidados: [
  //     {
  //       id: "1021e5d3-f560-4902-8c61-0a12e29c8002",
  //       nome: 'Eduardo Santos',
  //       email: 'eduardo@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "0442ea4b-e210-4c26-adb4-0cd87a0aceea",
  //       nome: 'Fernanda Costa',
  //       email: 'fernanda@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //   ],
  // },
  // {
  //   id: "a59962da-4153-4d2a-aa9a-406be12f52bd",
  //   alias: 'evento-dev-frontend',
  //   senha: 'front123',
  //   nome: 'Bootcamp de Desenvolvimento Frontend',
  //   data: new Date('2024-11-15T09:00:00Z'),
  //   local: 'Belo Horizonte, MG',
  //   descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
  //   imagem: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
  //   imagemBackground:
  //     'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "509c8d35-5b53-40d5-b397-dc8c516f3c53",
  //       nome: 'Gabriela Rocha',
  //       email: 'gabriela@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "d49ef1f0-5bc7-40df-bc2c-f354843e973a",
  //       nome: 'Hugo Nogueira',
  //       email: 'hugo@example.com',
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "1d269bbd-5526-458a-8baa-ffcc8ac11aab",
  //       nome: 'Isabela Martins',
  //       email: 'isabela@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "4ac56dee-47a7-458f-a176-a39d4d689137",
  //   alias: 'casamento-alberto-marina',
  //   senha: 'casamento2024',
  //   nome: 'Casamento do Alberto e Marina',
  //   data: new Date('2024-11-25T16:00:00Z'),
  //   local: 'Florianópolis, SC',
  //   descricao:
  //     'Celebração do casamento de Alberto e Marina com amigos e familiares.',
  //   imagem: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
  //   imagemBackground:
  //     'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "d015766d-d03d-4f49-bf1b-a6a9c4540243",
  //       nome: 'Bruno Cardoso',
  //       email: 'bruno@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "d902378b-5d9a-4bc7-99c7-2fdee0e080fa",
  //       nome: 'Carla Mendes',
  //       email: 'carla@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "7922e4ce-9134-4afe-93c9-d19c457aceb6",
  //   alias: 'aniversario-joao',
  //   senha: 'joao2024',
  //   nome: 'Aniversário do João - 30 Anos',
  //   data: new Date('2024-12-05T18:00:00Z'),
  //   local: 'Curitiba, PR',
  //   descricao:
  //     'Comemoração dos 30 anos de João com amigos próximos e familiares.',
  //   imagem: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
  //   imagemBackground:
  //     'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
  //   publicoEsperado: 80,
  //   convidados: [
  //     {
  //       id: "3493f0bf-e990-4352-83ba-e6aa37b7908b",
  //       nome: 'Maria Souza',
  //       email: 'maria@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 2,
  //     },
  //     {
  //       id: "472d88dc-2363-4bd1-8e86-bdd06669ad39",
  //       nome: 'José Almeida',
  //       email: 'jose@example.com',
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "1fc3b47a-e6ee-45e3-a2a6-ada423cbfcc9",
  //   alias: 'inauguracao-loja-estrela',
  //   senha: 'estrela2024',
  //   nome: 'Inauguração da Loja Estrela',
  //   data: new Date('2024-12-10T09:00:00Z'),
  //   local: 'Porto Alegre, RS',
  //   descricao:
  //     'Evento de inauguração da nova loja Estrela com brindes e promoções.',
  //   imagem: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
  //   imagemBackground:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
  //   publicoEsperado: 300,
  //   convidados: [
  //     {
  //       id: "3d466545-642d-49f6-8a5d-1ceca29be584",
  //       nome: 'Cláudia Lima',
  //       email: 'claudia@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 3,
  //     },
  //     {
  //       id: "17d631e8-a8df-4fa0-a5fa-5f1f28c9f4a3",
  //       nome: 'Ricardo Barbosa',
  //       email: 'ricardo@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "2627ed5e-36ad-4cb5-bcfe-82ecd97e3cee",
  //   alias: 'reuniao-familia-oliveira',
  //   senha: 'familia2024',
  //   nome: 'Reunião da Família Oliveira',
  //   data: new Date('2024-12-15T12:00:00Z'),
  //   local: 'Salvador, BA',
  //   descricao: 'Reunião de fim de ano da família Oliveira.',
  //   imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
  //   imagemBackground:
  //     'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
  //   publicoEsperado: 50,
  //   convidados: [
  //     {
  //       id: "37d6e9e5-bee4-47f0-a9b1-8079a107eb7b",
  //       nome: 'Thiago Oliveira',
  //       email: 'thiago@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 4,
  //     },
  //     {
  //       id: "dec767df-8387-4a62-9784-ea6bfd6cdf3c",
  //       nome: 'Letícia Oliveira',
  //       email: 'leticia@example.com',
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
]

export default eventos

