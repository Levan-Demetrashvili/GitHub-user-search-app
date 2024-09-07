import { createContext, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  SearchUserContextType,
  UserContextType,
  UserType,
} from '../types/UserContext.types';
import { API_URL } from '../configs/config';

const UserContext = createContext<UserContextType | null>(null);
const SearchUserContext = createContext<SearchUserContextType | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function getUserData() {
    if (
      username.length < 3 ||
      username.toLowerCase() === user?.login.toLowerCase()
    )
      return;

    try {
      setIsLoading(true);
      setError('');
      const res: AxiosResponse = await axios.get(API_URL + username, {
        signal: AbortSignal.timeout(5000),
      });
      if (!res.data)
        throw new Error('Something went wrong fetching user data ...');
      setUser(res.data);
      setUsername('');
    } catch (e) {
      if (axios.isAxiosError(e)) setError('Axios Error: ' + e.message);
      else if (e instanceof Error) setError('Error: ' + e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SearchUserContext.Provider
      value={{
        username,
        onInputChange,
        getUserData,
      }}
    >
      <UserContext.Provider value={{ user, isLoading, error }}>
        {children}
      </UserContext.Provider>
    </SearchUserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('UserContext was used outside of UserProvider');
  return context;
}

function useSearchUser() {
  const context = useContext(SearchUserContext);
  if (!context) throw new Error('UserContext was used outside of UserProvider');
  return context;
}

export { UserProvider, useUser, useSearchUser };
