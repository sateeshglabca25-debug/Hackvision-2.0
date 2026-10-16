// Minimal firebase helper - uses env vars and supports emulator when USE_FIREBASE_EMULATOR=true
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

if (import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true'){
  // defaults: localhost:9099 auth, 8080 firestore, 9199 storage
  try{
    connectAuthEmulator(auth, 'http://localhost:9099')
    connectFirestoreEmulator(db, 'localhost', 8080)
    connectStorageEmulator(storage, 'localhost', 9199)
    console.log('Connected to Firebase emulators')
  }catch(e){console.warn('Emulator connect failed', e)}
}
