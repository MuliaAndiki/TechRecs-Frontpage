export interface CardBoardType {
  image: string;
  top: {
    title: string;
    subTitle: string;
    subTitleV1: string;
  };
  bot: {
    desc: string;
    count: string;
    subDesc: string;
  };
}

export interface SosmedCardType {
  tiktok: {
    ref: React.RefObject<HTMLDivElement | null>;
    name: string;
    icon: any;
    params: string;
    delay?: any;
    curvature?: any;
  };
  discord: {
    ref: React.RefObject<HTMLDivElement | null>;
    icon: any;
    name: string;
    params: string;
    delay?: any;
    curvature?: any;
  };
  github: {
    ref: React.RefObject<HTMLDivElement | null>;
    icon: any;
    name: string;
    params: string;
    delay?: any;
    curvature?: any;
  };
  email: {
    ref: React.RefObject<HTMLDivElement | null>;
    icon: any;
    name: string;
    params: string;
    delay?: any;
    curvature?: any;
  };
}

export interface AiCardType {
  straight: {
    user: {
      ref: React.RefObject<HTMLDivElement | null>;
      icon: any;
      name: string;
      params: string;
      delay?: any;
      curvature?: any;
    };
    techRecs: {
      ref: React.RefObject<HTMLDivElement | null>;
      icon: any;
      name: string;
      params: string;
      delay?: any;
      curvature?: any;
    };
  };
  cros: {
    deepseek: {
      ref: React.RefObject<HTMLDivElement | null>;
      icon: any;
      name: string;
      params: string;
      from?: any;
      delay?: any;
      curvature?: any;
    };
    gemini: {
      ref: React.RefObject<HTMLDivElement | null>;
      icon: any;
      name: string;
      params: string;
      delay?: any;
      from?: any;
      curvature?: any;
    };
  };
  back: {
    deepseek: {
      ref: React.RefObject<HTMLDivElement | null>;
      icon: any;
      name: string;
      params: string;
      from?: any;
      delay?: any;
      curvature?: any;
    };
    gemini: {
      ref: React.RefObject<HTMLDivElement | null>;
      icon: any;
      name: string;
      params: string;
      delay?: any;
      from?: any;
      curvature?: any;
    };
  };
}

export interface MarqueType {
  image?: string;
  title?: string;
}

export interface DropdownType {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  menuItem?: [string];
  shortcutItem?: [string];
  className?: string;
}

export interface ResponType {
  _id: string;
  prompt: string;
  response: string;
}

export interface ChatType {
  sender: 'user' | 'ai';
  text: string;
}
