export interface Texts {
  HOME: {
    PROFILE_DESCRIPTION: string;
  };
  LAYOUT: {
    ENG: string;
    SPA: string;
  };
  POST: {
    BACK_ARROW: string;
  };
}

interface Languages {
  ENG: Texts;
  SPA: Texts;
}

const STRINGS: Languages = {
  ENG: {
    LAYOUT: {
      ENG: "ENG",
      SPA: "SPA",
    },
    HOME: {
      PROFILE_DESCRIPTION:
        "I’m a Software Engineer passionate about entrepreneurship, I like to solve problems using creativity and innovation, I’m always motivated to learn something every day and share knowledge in communities. I consider myself  a leader in training, a curious person with initiative, and a great dancer",
    },
    POST: {
      BACK_ARROW: "← Back to home",
    },
  },
  SPA: {
    LAYOUT: {
      ENG: "ING",
      SPA: "ESP",
    },
    HOME: {
      PROFILE_DESCRIPTION:
        "Soy un Ingeniero de Software apasionado por el emprendimiento, me gusta resolver problemas usando la creatividad y la innovación, siempre estoy motivado por aprender cada día algo nuevo y compartir conocimiento en comunidades. Me considero un líder en formación, una persona curiosa con iniciativa y un gran bailarín",
    },
    POST: { BACK_ARROW: "← Volver al inico" },
  },
};

export default STRINGS;
