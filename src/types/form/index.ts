export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  email: string;
  password: string;
  fullName: string;
}

export interface PromptType {
  _id?: string;
  prompt: string;
  response?: string;
}
