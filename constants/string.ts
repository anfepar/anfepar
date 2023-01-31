export interface Texts {
  [key: string]: {
    [keyId: string]: string | ((props: any) => string),
  }
};

const STRINGS: Texts = {
  LAYOUT: {
    ENG: 'ING',
    SPA: 'ESP',
  },
  HOME: {
    PROFILE_DESCRIPTION:
      'Soy un Ingeniero de Software apasionado por el emprendimiento, me gusta resolver problemas usando la creatividad y la innovación, siempre estoy motivado por aprender cada día algo nuevo y compartir conocimiento en comunidades. Me considero un líder en formación, una persona curiosa con iniciativa y un gran bailarín',
  },
  POST: { BACK_ARROW: '← Volver al inico' },
  Header: {
    logo_alt: 'Logo de anfepar',
    icon_alt: ({ name }) => `Logo de ${name}`,
    url_blog: 'Blog',
    url_projects: 'Projects',
  },
  Footer: {
    about_me: 'Made by Felipe Pardo © 2023',
  }
};

export default STRINGS;
