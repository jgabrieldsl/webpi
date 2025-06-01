import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const addUserData = async (userId: string, data: any) => {
  return await addDoc(collection(db, 'users'), { ...data, userId });
};