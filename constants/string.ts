export interface Texts {
  [key: string]: {
    [keyId: string]: string | ((props: any) => string),
  }
};

const STRINGS: Texts = {
  POST: { BACK_ARROW: "← Volver al inico" },
  Header: {
    logo_alt: "Logo de anfepar",
    icon_alt: ({ name }) => `Logo de ${name}`,
    url_blog: "Blog",
    url_projects: "Projects",
  },
  Footer: {
    about_me: "Made by Felipe Pardo © 2023",
  },
  Profile: {
    description: "Hi, I'm Felipe, I'm a frontend developer passionate about technology and how it could improve the people lives. I like to learn about users and how to solve their necessities with technology and a disruptive business model, I Constantly try to learn novel technologies, especially related with the web 3.0, I consider myself a great dancer 🕺"
  }
};

export default STRINGS;
