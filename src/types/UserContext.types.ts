export interface SearchUserContextType {
  username: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getUserData: () => void;
}

export interface UserContextType {
  user: UserType | null;
  isLoading: boolean;
  error: string;
}

export interface UserType {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
}
