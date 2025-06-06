import { create } from 'zustand'

interface AuthState {
  qrCode: string | null
  loginToken: string | null
  isLoading: boolean
  isLoadingAuth: boolean
  isAuthenticated: boolean
  isRedirecting: boolean
  error: string | null
  userUID: string | null
  username: string | null
  password: string | null
  setQRCode: (qrCode: string | null) => void
  setLoginToken: (token: string | null) => void
  setIsLoading: (isLoading: boolean) => void
  setIsLoadingAuth: (isLoading: boolean) => void
  setIsAuthenticated: (isAuthenticated: boolean) => void
  setIsRedirecting: (isRedirecting: boolean) => void
  setError: (error: string | null) => void
  setUserUID: (uid: string | null) => void
  setUsername: (username: string | null) => void
  setPassword: (password: string | null) => void
  resetAuthState: () => void
}

export const useAuthState = create<AuthState>((set) => ({
  qrCode: null,
  loginToken: null,
  isLoading: false,
  isLoadingAuth: false,
  isAuthenticated: false,
  isRedirecting: false,
  error: null,
  userUID: null,
  username: null,
  password: null,

  setQRCode: (qrCode) => set({ qrCode }),
  setLoginToken: (token) => set({ loginToken: token }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsLoadingAuth: (isLoadingAuth) => set({ isLoadingAuth }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setIsRedirecting: (isRedirecting) => set({ isRedirecting }),
  setError: (error) => set({ error }),
  setUserUID: (uid) => set({ userUID: uid }),
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),

  resetAuthState: () =>
    set({
      qrCode: null,
      loginToken: null,
      isLoading: false,
      isLoadingAuth: false,
      isAuthenticated: false,
      isRedirecting: false,
      error: null,
      userUID: null,
      username: null,
      password: null,
    }),
}))