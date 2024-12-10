/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { UserModel } from '@/shared/models';

interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserModel;
  checkAuthentication: () => Promise<void>;
}

interface AuthContextReturn {
  isAuthenticated: boolean;
  userData: UserModel;
  handleAuthenticate: (authenticated: boolean) => void;
  checkAuthentication: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserModel>({
    id: '',
    email: '',
    username: '',
  });

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/auth/check');
      const data = await response.json();

      setIsAuthenticated(data.isAuthenticated);
      setUserData(data.userData);
    } catch (error) {
      console.error('Erro ao verificar autenticação');
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      checkAuthentication();
    }
  }, [isAuthenticated]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      userData,
      checkAuthentication,
    }),
    [isAuthenticated, userData],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextReturn {
  if (useContext(AuthContext) === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  const { isAuthenticated, setIsAuthenticated, userData, checkAuthentication } =
    useContext(AuthContext);

  const handleAuthenticate = (authenticated: boolean): void => {
    setIsAuthenticated(authenticated);
  };

  return { isAuthenticated, handleAuthenticate, userData, checkAuthentication };
}
