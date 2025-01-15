import { IEvent, StatusPresence } from "../evento/model/Event";

const eventos: IEvent[] = [
  {
    alias: "evento-fullstack",
    password: "senha123",
    name: "Evento de Desenvolvimento Fullstack",
    startDate: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    address: "Av. Paulista, 123",
    description:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imageBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    monetize: false,
    keyPix: "",
    userId: 123890923,
    expectedAudience: 200,
    createAt: new Date("2024-12-01T10:00:00Z"),
    updateAt: new Date("2024-12-01T10:00:00Z"),
    guests: [
      {
        id: 876543210,
        status: "CONFIRMED" as StatusPresence,
        companions: 1,
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
        eventId: 12345678,
        guestId: 87654321,
      },
      {
        id: 234567890,
        status: "REFUSED" as StatusPresence,
        companions: 0,
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
        eventId: 12345678,
        guestId: 23456789,
      },
      {
        id: 987654320,
        status: "CONFIRMED" as StatusPresence,
        companions: 2,
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
        eventId: 12345678,
        guestId: 98765432,
      },
    ],
  },
  {
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    startDate: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    address: "Av. Paulista, 123",
    description: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    monetize: true,
    keyPix: "12345678901234567890",
    expectedAudience: 100,
    userId: 890495859385,
    createAt: new Date("2024-12-01T10:00:00Z"),
    updateAt: new Date("2024-12-01T10:00:00Z"),
    guests: [
      {
        id: 765432100,
        status: "CONFIRMED" as StatusPresence,
        companions: 0,
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
        eventId: 34567890,
        guestId: 76543210,
      },
      {
        id: 456789010,
        status: "CONFIRMED" as StatusPresence,
        companions: 1,
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
        eventId: 34567890,
        guestId: 45678901,
      },
    ],
  }
  // {
  //   id: 56789012,
  //   alias: "evento-dev-frontend",
  //   password: "front123",
  //   name: "Bootcamp de Desenvolvimento Frontend",
  //   startDate: new Date("2024-11-15T09:00:00Z"),
  //   local: "Belo Horizonte, MG",
  //   address: "Av. Paulista, 123",
  //   description: "Aprenda a criar interfaces incríveis e responsivas.",
  //   image:
  //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
  //   imageBackground:
  //     "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
  //   monetize: true,
  //   keyPix: "12345678901234567890",
  //     expectedAudience: 150,
  //   guests: [
  //     {
  //       id: 65432109,
  //       name: "Gabriela Rocha",
  //       email: "gabriela@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 1,
  //     },
  //     {
  //       id: 67890123,
  //       name: "Hugo Nogueira",
  //       email: "hugo@example.com",
  //       status: "REFUSED" as StatusPresense ,
  //       companions: 0,
  //     },
  //     {
  //       id: 54321098,
  //       name: "Isabela Martins",
  //       email: "isabela@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: 78901234,
  //   alias: "casamento-alberto-marina",
  //   password: "casamento2024",
  //   name: "Casamento do Alberto e Marina",
  //   startDate: new Date("2024-11-25T16:00:00Z"),
  //   local: "Florianópolis, SC",
  //   address: "Av. Paulista, 123",
  //   description:
  //     "Celebração do casamento de Alberto e Marina com amigos e familiares.",
  //   image:
  //     "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
  //   imageBackground:
  //     "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
  //   monetize: false,
  //   keyPix: "",
  //     expectedAudience: 150,
  //   guests: [
  //     {
  //       id: 43210987,
  //       name: "Bruno Cardoso",
  //       email: "bruno@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 1,
  //     },
  //     {
  //       id: 89012345,
  //       name: "Carla Mendes",
  //       email: "carla@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: 90123456,
  //   alias: "aniversario-joao",
  //   password: "joao2024",
  //   name: "Aniversário do João - 30 Anos",
  //   startDate: new Date("2024-12-05T18:00:00Z"),
  //   local: "Curitiba, PR",
  //   address: "Av. Paulista, 123",
  //   description:
  //     "Comemoração dos 30 anos de João com amigos próximos e familiares.",
  //   image:
  //     "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
  //   imageBackground:
  //     "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
  //   monetize: true,
  //   keyPix: "12345678901234567890",
  //     expectedAudience: 80,
  //   guests: [
  //     {
  //       id: 32109876,
  //       name: "Maria Souza",
  //       email: "maria@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 2,
  //     },
  //     {
  //       id: 12345678,
  //       name: "José Almeida",
  //       email: "jose@example.com",
  //       status: "REFUSED" as StatusPresense ,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: 23456789,
  //   alias: "inauguracao-loja-estrela",
  //   password: "estrela2024",
  //   name: "Inauguração da Loja Estrela",
  //   startDate: new Date("2024-12-10T09:00:00Z"),
  //   local: "Porto Alegre, RS",
  //   address: "Av. Paulista, 123",
  //   description:
  //     "Evento de inauguração da nova loja Estrela com brindes e promoções.",
  //   image:
  //     "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
  //   imageBackground:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
  //   monetize: false,
  //   keyPix: "",
  //     expectedAudience: 300,
  //   guests: [
  //     {
  //       id: 21098765,
  //       name: "Cláudia Lima",
  //       email: "claudia@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 3,
  //     },
  //     {
  //       id: 34567890,
  //       name: "Ricardo Barbosa",
  //       email: "ricardo@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: 45678901,
  //   alias: "reuniao-familia-oliveira",
  //   password: "familia2024",
  //   name: "Reunião da Família Oliveira",
  //   startDate: new Date("2024-12-15T12:00:00Z"),
  //   local: "Salvador, BA",
  //   address: "Av. Paulista, 123",
  //   description: "Reunião de fim de ano da família Oliveira.",
  //   image:
  //     "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
  //   imageBackground:
  //     "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
  //   monetize: true,
  //   keyPix: "12345678901234567890",
  //     expectedAudience: 50,
  //   guests: [
  //     {
  //       id: 10987654,
  //       name: "Thiago Oliveira",
  //       email: "thiago@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 4,
  //     },
  //     {
  //       id: 56789012,
  //       name: "Letícia Oliveira",
  //       email: "leticia@example.com",
  //       status: "CONFIRMED" as StatusPresence,
  //       companions: 0,
  //     },
  // ],
  // },
];

export default eventos;
