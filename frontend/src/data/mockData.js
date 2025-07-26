// Mock data for the portfolio
export const developerProfile = {
  name: "Alan Nicolas",
  title: "Desenvolvedor Full Stack",
  email: "alannicolasctt7@outlook",
  phone: "+55 (92) 99286-3593",
  location: "Manaus, AM",
  bio: "Desenvolvedor Full Stack em formação apaixonado por criar soluções inovadoras que transformam ideias em realidade digital. Amo desenvolver aplicações web robustas e escaláveis, sempre focando na experiência do usuário e na qualidade do código.",
    socialLinks: {
    github: "https://github.com/Alan_Nicolas",
    linkedin: "www.linkedin.com/in/alan-nicolas-35639a1b7",
    email: "mailto:alannicolasctt7@outlook"
  }
  
};

export const skills = {
  frontend: [
    { name: "Angular", level: 50, icon: "⚡" },
    { name: "React", level: 70, icon: "⚛️" },
    { name: "TypeScript", level: 40, icon: "🔷" },
    { name: "JavaScript", level: 60, icon: "💛" }
  ],
  backend: [
    { name: "Java", level: 80, icon: "☕" },
    { name: "Spring Boot", level: 85, icon: "🍃" },
    { name: "API REST", level: 88, icon: "🔗" }
  ],
  database: [
    { name: "MySQL", level: 60, icon: "🗄️" }
  ],
  devops: [
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "Git", level: 90, icon: "📚" },
    { name: "GitHub", level: 90, icon: "🐙" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Stats Volts",
    description: "Voltado para pessoas economicas, que gostam de saber sobre o gasto de x coisas que consumem.O usuario irá ter total identificação dos valores do consumo da sua energia por um dashboard, tendo uma interface intuitiva e facil de usar, tivemos o foco total na experiencia do usuario com a interface, desde o cadastro ate o Dashboard.",
    image: "https://www.industriasantaluzia.com.br/wp-content/uploads/2022/11/voltage-switchboard-with-circuit-breakers-close-up.jpg",
    tech: ["React", "Tailwind CSS", "Firebase", "Vite", "JavaScript"],
    github: "https://github.com/Alan-Nicolas/Stats-Volts---Inovatec-2024",
    demo: null,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Gerenciador de Biblioteca",
    description: "Desenvolvido em Java com JavaFX, sistema focado na simplicidade e usuabilidade. Oferecendo um menu onde contem Gerenciador de Usuario, de livros, e emprestimos de livro, Permitindo ter o crud dentro de cada modulo. O Sistema visa atender bibliotecas que buscam uma solução eficiente, sem burocrario, para controle básico de acervo e usuário.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbODafToVczjPADv2KDOT9BgUwEsK4TW_YAw&s",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/Alan-Nicolas/Biblioteca-Facil",
    demo: null,
    category: "Aplicação Desktop"
  },
  {
    id: 3,
    title: "Sistema de Gerecimamento de Orçamentos",
    description: "Um sistema voltado para pessoas que buscar facilidade no seu dia a dia dentro do seu negocio. Fiz esse sistema com o intuito para pessoas que fazem orçamento da maneira antiga, com papel, onde há um gasto de tempo maior e deixando algo impreciso. No sistema tem a criação do orçamento, você pode listar, deletar e atualizar se caso acontecer alguma alteração, o melhor é que você pode importar o orçamento com pdf e enviar para o cliente.",
    image: "https://www.unama.br/sites/unama.br/files/fields/imagemLateral/noticias/2019/08/imposto_de_renda_3_1.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL", "Docker", "JPA"],
    github: "https://github.com/Alan-Nicolas/system-quoatation-MS",
    demo: null,
    category: "Full Stack"
  },
  {
    id: 4,
    title: "API Products",
    description: "Uma APIRest para o gerencimaneto de produtos, podendo criar, deletar, listar e atualizar produtos cadastrados. Os produtos estão sendo em alocado na memoria do MySql containeirizado por Docker, achei algo mais facil para teste e menos burocratico e garante a portabilidade e a fácil configuração.",
    image: "https://img.myloview.com.br/fotomurais/add-to-shopping-cart-icon-700-223664772.jpg",
    tech: ["Java", "Spring Boot", "MySQL", "Docker", "JPA", "Insominia"],
    github: "https://github.com/Alan-Nicolas/CRUD-SpringBoot",
    demo: null,
    category: "Backend"
  },
  {
    id: 5,
    title: "Mais em breve outros projetos",
    description: "Estou estudando para projetar mais experiencias com IA, uma interface muito mais moderna, aplicações mais seguras com JWT e revolucionaria",
    image: "https://symbl-cdn.com/i/webp/dd/8b7f393a72b7705da89b5b87a1d340.webp",
    tech: ["Agente de IA", "JWT", "Java", "Angular", "Spring Boot"],
    github: null,
    demo: null,
    category: null
  }
];

export const experiences = [
  {
    company: "Mondial Eletrodomesticos",
    position: "Montador Multifuncional",
    period: "2024 - Presente",
    description: "Testo placas, montagens de placas, solda, montagem de eletrodomésticos, organização do setor, controle de qualidade.",
  },
 
];

export const playgroundProjects = [

];