interface Texts {
  HOME: {
    PROFILE_DESCRIPTION: string;
  };
  LAYOUT: {
    ENG: string;
    SPA: string;
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
        "Computing engineer passionate about entrepreneurship, who is always motivated with self-learning and knowledge exchange with others. I am delighted about learning new technologies and contributing solutions to real-life challenges",
    },
  },
  SPA: {
    LAYOUT: {
      ENG: "ING",
      SPA: "ESP",
    },
    HOME: {
      PROFILE_DESCRIPTION:
        "Ingeniero informático apasionado por el emprendimiento, siempre motivado por el autoaprendizaje y el intercambio de conocimientos con los demás. Me emociona aprender nuevas tecnologías y aportar soluciones a los desafíos de la vida real.",
    },
  },
};

export default STRINGS;
