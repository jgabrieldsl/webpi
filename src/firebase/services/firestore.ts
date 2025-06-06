import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const getUserData = async (uid: string) => {
  try {
    const userDocRef = doc(db, 'AccountsManager', uid)
    const userDocSnap = await getDoc(userDocRef)

    if (userDocSnap.exists()) {
      return userDocSnap.data()
    } else {
      console.log('Nenhum documento encontrado para este UID!')
      return null
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error)
    throw error
  }
}