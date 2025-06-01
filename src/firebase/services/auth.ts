

import { auth } from '@/firebase'
import { signInWithEmailAndPassword, browserLocalPersistence, signOut, type User } from 'firebase/auth'

// Definir persistência para sessão de navegador
await auth.setPersistence(browserLocalPersistence);

export const loginUser = async (email: string, password: string): Promise<User> => {
  if (!email || !password) {
    throw new Error('E-mail e senha são obrigatórios')
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao fazer login: ${error.message}`)
    } else {
      throw new Error('Erro ao fazer login: Erro desconhecido')
    }
  }
}

export const logoutUser = (): Promise<void> => {
  return signOut(auth)
}

export const isEmailVerified = (): boolean => {
  const user = auth.currentUser
  return user ? user.emailVerified : false
}