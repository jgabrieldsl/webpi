import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUD8ddKYTYDi1Z2i45PLZ94kiIFBKdhAU",
  authDomain: "superid-aaa73.firebaseapp.com",
  databaseURL: "https://superid-aaa73.firebaseio.com",
  projectId: "superid-aaa73",
  storageBucket: "superid-aaa73.firebasestorage.app",
  messagingSenderId: "90717640785",
  appId: "1:90717640785:android:acf9615fddfb977b908070"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)