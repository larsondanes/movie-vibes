import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  AuthState,
  User,
  LoginCredentials,
  RegisterCredentials,
} from '../types/auth';
import { LOGIN_MUTATION, REGISTER_MUTATION, ME_QUERY } from '../graphql/auth';

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'SET_ERROR'; payload: string };

interface AuthContextType extends AuthState {
  login: (_credentials: LoginCredentials) => Promise<void>;
  register: (_credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const [registerMutation] = useMutation(REGISTER_MUTATION);

  // Query to get current user if token exists
  useQuery(ME_QUERY, {
    skip: !state.token,
    onCompleted: data => {
      if (data?.me) {
        dispatch({
          type: 'SET_USER',
          payload: { user: data.me, token: state.token! },
        });
      }
    },
    onError: () => {
      // Token is invalid, clear it
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
    },
  });

  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data } = await loginMutation({
        variables: { loginInput: credentials },
      });

      if (data?.login) {
        const { user, access_token } = data.login;
        localStorage.setItem('token', access_token);
        dispatch({ type: 'SET_USER', payload: { user, token: access_token } });
      }
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data } = await registerMutation({
        variables: { registerInput: credentials },
      });

      if (data?.register) {
        const { user, access_token } = data.register;
        localStorage.setItem('token', access_token);
        dispatch({ type: 'SET_USER', payload: { user, token: access_token } });
      }
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  // Set loading to false once we've checked for existing token
  useEffect(() => {
    if (!state.token) {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.token]);

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    error: null, // TODO: Implement error handling
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
