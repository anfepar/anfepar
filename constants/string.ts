import { ENGLISH } from "./translations/english";
import { SPANISH } from "./translations/spanish";

export interface Texts {
  HEADER:{
    LOGO_ALT: string;
    ABOUT_ME: string;
    BLOG: string;
    PROJECTS: string;
    GITHUB_ALT: string;
    LINKEDIN_ALT:string;
    TOGGLE_MODE_ARIA_LABEL: string;
  }
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
    ...ENGLISH
  },
  SPA: {
    ...SPANISH
  },
};

export default STRINGS;
