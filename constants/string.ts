export interface Texts {
  HOME: {
    PROFILE_DESCRIPTION: string
  }
  LAYOUT: {
    ENG: string
    SPA: string
  }
  POST: {
    BACK_ARROW: string
  }
}

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
};

export default STRINGS
