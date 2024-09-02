export interface SearchUserContextType {
  username: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getUserData: () => void;
}

export interface UserContextType {
  user: object;
  isLoading: boolean;
  error: string;
}
