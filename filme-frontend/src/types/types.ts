export interface UserLogin {
  username: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: UserLogin) => Promise<void>;
  logout: () => void;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export type Comentario = {
  id: number;
  texto: string;
  criado_em: string;
  autor_username: string;
  filme: string;
}