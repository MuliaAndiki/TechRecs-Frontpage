export interface NavbarType {
  title: string;
  params: string;
}

export interface SosmedType {
  icon: any;
  params: string;
  name?: string;
}

export interface FooterType {
  Explore: {
    title: string;
    params: string;
  }[];
  Menu: {
    title: string;
    params: string;
  }[];
}
