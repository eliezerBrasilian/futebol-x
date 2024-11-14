import fi1 from "../assets/fi_1.jpg";
import fi2 from "../assets/fi_2.jpg";
import fi3 from "../assets/fi_3.jpg";
import { Project } from "./types/Project";

import b1 from "../assets/bisc_1.jpg";
import b2 from "../assets/bisc_2.jpg";

// import g1 from "../assets/ga_1.jpg";
// import g2 from "../assets/ga_2.jpg";
// import g3 from "../assets/ga_3.jpg";

// import d1 from "../assets/d1_x1.png";
// import d2 from "../assets/d1_x2.png";

import { Nicho } from "./enums/Nicho";
import { ProjectType } from "./enums/ProjectType";

// import fo1 from "../assets/fo1.png";
// import fo2 from "../assets/fo2.png";
// import fo3 from "../assets/fo3.png";

import dd from "../assets/web/discord_detona_img.png";
import env from "./exposedEnv";
import { ApiInterface } from "./types/ApiInterface";
import { ExeInterface } from "./types/ExeInterface";

export const exeFiles: ExeInterface[] = [
  {
    title: "jsf-template",
    description:
      "Exetucável que te ajuda a criar automaticamente um projeto Java Server Faces configurado e pronto para uso",
    githubLink: "https://github.com/eliezerBrasilian/jsf-template",
    tecnologias: ["java", "Shell", "Batchfile"],
  },
];

export const apiProjects: ApiInterface[] = [
  {
    title: "book-mago-api",
    description:
      "Esta API gratuita é constituída de dois microserviços que se complementam em exibir livros e converter seus preços de uma moeda específica para outra",
    githubLink: env.bookMagoApiRepo,

    tecnologias: ["Swagger Open API", "Java", "Spring Boot"],
    isMicroservice: true,
    swaggerLinks: [env.bookMagoApiBookDoc, env.bookMagoApiCambioDoc],
  },
  {
    title: "detona-movies-api",
    description:
      "API de listagem de filmes desenvolvida para você usar em seu projeto gratuitamente.",
    githubLink: env.detonaMoviesApiRepo,
    tecnologias: ["Swagger Open API", "Java", "Spring Boot"],
    isMicroservice: false,
    swaggerLinks: [env.detonaMoviesApiDoc],
  },
  {
    title: "discord-detona-api",
    description:
      "Com a Discord Detona API é possível enviar uma mensagem diretamente para nosso servidor Dev Detona no Discord.",
    githubLink: env.discordDetonaApiRepo,
    tecnologias: ["Swagger Open API", "Java", "Spring Boot"],
    isMicroservice: false,
    swaggerLinks: [env.discordDetonaApiDoc],
  },
];

export const projectItems: Project[] = [
  {
    id: 1,
    images: [fi1, fi2, fi3],
    title: "iFinanças",
    description:
      "Um aplicativo criado com carinho para você ter controle total sobre seu dinheiro. Através do kakeibo, você rastreia todos suas movimentações e consegue poupar mais dinheiro e viver mais tranquilamente.",
    githubLink: env.financasRepo,
    nicho: Nicho.FINANCE,
    testLink: env.financasGooglePlay,
    type: ProjectType.APP,
    uptodownLink: "https://ifinancas.br.uptodown.com/android",
  },

  {
    id: 2,
    images: [b1, b2],
    title: "Biscoito da Sorte",
    description:
      "Um aplicativo de frases simples e amigável, para aquele momento em que você precisa só de uma frase de motivação para deixar o seu dia mais alegre",
    githubLink: env.fortuneCookieRepo,
    nicho: Nicho.ENTERNAIMENT,
    testLink: env.fortuneCookieGooglePlay,
    type: ProjectType.APP,
  },

  {
    id: 5,
    images: [dd],
    title: "Discord Detona",
    description:
      "Nesse sisteminha simples, você tem a possibilidade de enviar uma mensagem para nosso servidor no Discord. Você só precisa preencher as informações desejadas e clicar em Enviar. A interface foi feita utilizando React e a API feita com Spring Boot (Java)",
    githubLink: env.foodfacilWebRepo,
    nicho: Nicho.UTILITARIO,
    testLink: env.foodfacilWeb,
    type: ProjectType.SITE,
  },

  // {
  //   id: 4,
  //   images: [fo1, fo2, fo3],
  //   title: "FoodFacil Delivery",
  //   description:
  //     "Um site de delivery de salgados, robusto que calcula taxa de entrega dependendo da localização do usuário. Possui também pagamentos via pix e autenticação com Google. E foi pensado exclusivamente para celulares",
  //   githubLink: env.foodfacilWebRepo,
  //   nicho: Nicho.DELIVERY,
  //   testLink: env.foodfacilWeb,
  //   type: ProjectType.SITE,
  // },

  // {
  //   id: 5,
  //   images: [d1, d2],
  //   title: "Sistema de diárias - Prefeitura",
  //   description:
  //     "Esse é um sistema criado para a prefeitura de Brás Pires para automatizar marcações de veículos e pacientes. Isso garante uma redução em impressões de papeis e agiliza o processo",
  //   githubLink: env.diariasRepo,
  //   nicho: Nicho.HEALTH,
  //   testLink: env.diariasSite,
  //   type: ProjectType.SITE,
  // },

  // {
  //   id: 6,
  //   images: [""],
  //   title: "FoodFacil API",
  //   description:
  //     "API desenvolvida para o sistema de delivery da FoodFacil, sistema robusto com autenticação, e pagamentos via PIX",
  //   githubLink: env.foodFacilApiRepo,
  //   testLink: env.foodFacilApiDoc,
  //   nicho: Nicho.DELIVERY,
  //   type: ProjectType.API,
  // },

  {
    id: 7,
    images: [""],
    title: "jetpack-compose-google-sign-in",
    description:
      "Biblioteca desenvolvida para facilitar a integração da autenticação com Google em aplicativos android criados com jetpack compose, ocultando códigos mais complexos do usuário",
    githubLink: env.libGoogleSignIn,
    nicho: Nicho.ALTHENTICATION,
    testLink: "",
    type: ProjectType.LIB,
  },

  {
    id: 9,
    images: [""],
    title: "swipeable-modal",
    description:
      "Biblioteca criada para permitir o uso de um Modal Arrastável e personalizável em aplicativos android utilizando react-native",
    githubLink: env.swipableModalRepo,
    nicho: "nicho de utilitários" as Nicho,
    testLink: "",
    type: ProjectType.LIB,
  },
  // {
  //   id: 10,
  //   images: [""],
  //   title: "tasks-api",
  //   description: "API que permite autenticação de usuários e crud de tarefas",
  //   githubLink: env.tasksApiRepo,
  //   nicho: "nicho de utilitários" as Nicho,
  //   testLink: "",
  //   type: ProjectType.API,
  // },
  {
    id: 11,
    images: [""],
    title: "jetpack-compose-brazilian-currency-visual-transformation",
    description:
      "Biblioteca desenvolvida para facilitar a formatação de input para a moeda brasileira em aplicativos android feitos com jetpack-compose",
    githubLink: env.currencyVisualTransformationRepo,
    nicho: "nicho de utilitários" as Nicho,
    testLink: "",
    type: ProjectType.LIB,
  },
];
