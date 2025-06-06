

import { auth } from '@/firebase'
import { signInWithEmailAndPassword, browserLocalPersistence, signOut, type User } from 'firebase/auth'

// Definir persistência para sessão de navegador
async function initializeAuth() {
  await auth.setPersistence(browserLocalPersistence)
}

initializeAuth()

export const loginUser = async (email: string, password: string): Promise<User | undefined> => {
  if (!email || !password) {
    throw new Error('E-mail e senha são obrigatórios')
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('invalid-credential')) {
        throw new Error('Credenciais inválidas: e-mail ou senha incorretos.')
      }
    } else {
      throw new Error('Erro ao fazer login: Erro desconhecido')
    }
    return undefined
  }
}

export const logoutUser = (): Promise<void> => {
  return signOut(auth)
}

export const isEmailVerified = (): boolean => {
  const user = auth.currentUser
  return user ? user.emailVerified : false
}