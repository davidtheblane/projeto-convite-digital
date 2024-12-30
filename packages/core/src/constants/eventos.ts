import { IEvent } from "../evento/model/Event";
import { v4 as uuid } from "uuid";

const eventos: IEvent[] = [
  {
    id: parseInt(uuid().split('-')[0], 16),
    alias: "evento-fullstack",
    password: "senha123",
    name: "Evento de Desenvolvimento Fullstack",
    initialDate: new Date("2024-12-01T10:00:00Z"),
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
      expectedAudience: 200,
    guests: [
      {
        id: parseInt(uuid().split('-')[0], 16),
        name: "Alice Silva",
        email: "alice@example.com",
        status: 1,
        companions: 1,
      },
      {
        id: parseInt(uuid().split('-')[0], 16),
        name: "Carlos Pereira",
        email: "carlos@example.com",
        status: 2,
        companions: 0,
      },
      {
        id: parseInt(uuid().split('-')[0], 16),
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        status: 1,
        companions: 2,
      },
    ],
  },
  {
    id: parseInt(uuid().split('-')[0], 16),
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    initialDate: new Date("2024-11-20T15:00:00Z"),
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
    guests: [
      {
        id: parseInt(uuid().split('-')[0], 16),
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        status: 1,
        companions: 0,
      },
      {
        id: parseInt(uuid().split('-')[0], 16),
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        status: 1,
        companions: 1,
      },
    ],
  }
  // {
  //   id: parseInt(uuid().split('-')[0], 16),
  //   alias: "evento-dev-frontend",
  //   password: "front123",
  //   name: "Bootcamp de Desenvolvimento Frontend",
  //   initialDate: new Date("2024-11-15T09:00:00Z"),
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
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Gabriela Rocha",
  //       email: "gabriela@example.com",
  //       status: 1,
  //       companions: 1,
  //     },
  //     {
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Hugo Nogueira",
  //       email: "hugo@example.com",
  //       status: 2,
  //       companions: 0,
  //     },
  //     {
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Isabela Martins",
  //       email: "isabela@example.com",
  //       status: 1,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: parseInt(uuid().split('-')[0], 16),
  //   alias: "casamento-alberto-marina",
  //   password: "casamento2024",
  //   name: "Casamento do Alberto e Marina",
  //   initialDate: new Date("2024-11-25T16:00:00Z"),
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
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Bruno Cardoso",
  //       email: "bruno@example.com",
  //       status: 1,
  //       companions: 1,
  //     },
  //     {
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Carla Mendes",
  //       email: "carla@example.com",
  //       status: 1,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: parseInt(uuid().split('-')[0], 16),
  //   alias: "aniversario-joao",
  //   password: "joao2024",
  //   name: "Aniversário do João - 30 Anos",
  //   initialDate: new Date("2024-12-05T18:00:00Z"),
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
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Maria Souza",
  //       email: "maria@example.com",
  //       status: 1,
  //       companions: 2,
  //     },
  //     {
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "José Almeida",
  //       email: "jose@example.com",
  //       status: 2,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: parseInt(uuid().split('-')[0], 16),
  //   alias: "inauguracao-loja-estrela",
  //   password: "estrela2024",
  //   name: "Inauguração da Loja Estrela",
  //   initialDate: new Date("2024-12-10T09:00:00Z"),
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
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Cláudia Lima",
  //       email: "claudia@example.com",
  //       status: 1,
  //       companions: 3,
  //     },
  //     {
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Ricardo Barbosa",
  //       email: "ricardo@example.com",
  //       status: 1,
  //       companions: 0,
  //     },
  //   ],
  // },
  // {
  //   id: parseInt(uuid().split('-')[0], 16),
  //   alias: "reuniao-familia-oliveira",
  //   password: "familia2024",
  //   name: "Reunião da Família Oliveira",
  //   initialDate: new Date("2024-12-15T12:00:00Z"),
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
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Thiago Oliveira",
  //       email: "thiago@example.com",
  //       status: 1,
  //       companions: 4,
  //     },
  //     {
  //       id: parseInt(uuid().split('-')[0], 16),
  //       name: "Letícia Oliveira",
  //       email: "leticia@example.com",
  //       status: 1,
  //       companions: 0,
  //     },
    // ],
  // },
];

export default eventos;
