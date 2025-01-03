import { IGuest } from "../evento/model/Guest";

const eventos: IGuest[] = [
      {
        id: 87654321,
        name: "Alice Silva",
        email: "alice@example.com",
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
      },
      {
        id: 23456789,
        name: "Carlos Pereira",
        email: "carlos@example.com",
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
      },
      {
        id: 98765432,
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
      },
      {
        id: 76543210,
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
      },
      {
        id: 45678901,
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        createAt: new Date("2024-12-01T10:00:00Z"),
        updateAt: new Date("2024-12-01T10:00:00Z"),
      },
  // {
  //   id: 56789012,
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
  //       id: 65432109,
  //       name: "Gabriela Rocha",
  //       email: "gabriela@example.com",
  //  
  //  
  //     },
  //     {
  //       id: 67890123,
  //       name: "Hugo Nogueira",
  //       email: "hugo@example.com",
  //  
  //  
  //     },
  //     {
  //       id: 54321098,
  //       name: "Isabela Martins",
  //       email: "isabela@example.com",
  //  
  //  
  //     },
  //   ],
  // },
  // {
  //   id: 78901234,
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
  //       id: 43210987,
  //       name: "Bruno Cardoso",
  //       email: "bruno@example.com",
  //  
  //  
  //     },
  //     {
  //       id: 89012345,
  //       name: "Carla Mendes",
  //       email: "carla@example.com",
  //  
  //  
  //     },
  //   ],
  // },
  // {
  //   id: 90123456,
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
  //       id: 32109876,
  //       name: "Maria Souza",
  //       email: "maria@example.com",
  //  
  //  
  //     },
  //     {
  //       id: 12345678,
  //       name: "José Almeida",
  //       email: "jose@example.com",
  //  
  //  
  //     },
  //   ],
  // },
  // {
  //   id: 23456789,
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
  //       id: 21098765,
  //       name: "Cláudia Lima",
  //       email: "claudia@example.com",
  //  
  //  
  //     },
  //     {
  //       id: 34567890,
  //       name: "Ricardo Barbosa",
  //       email: "ricardo@example.com",
  //  
  //  
  //     },
  //   ],
  // },
  // {
  //   id: 45678901,
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
  //       id: 10987654,
  //       name: "Thiago Oliveira",
  //       email: "thiago@example.com",
  //  
  //  
  //     },
  //     {
  //       id: 56789012,
  //       name: "Letícia Oliveira",
  //       email: "leticia@example.com",
  //  
  //  
  //     },
    // ],
  // },
];

export default eventos;
