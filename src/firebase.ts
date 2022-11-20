import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD2auorhPENrygg0fhk4fLx7wJmyx8yWbc',
  authDomain: 'tomo-mane.firebaseapp.com',
  projectId: 'tomo-mane',
  storageBucket: 'tomo-mane.appspot.com',
  messagingSenderId: '988580240393',
  appId: '1:988580240393:web:ed7309d164c8a279b5ecd8',
  measurementId: 'G-R0ZTY1K7EP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
// googleのポップアップを提供
const provider = new GoogleAuthProvider()

export { auth, provider }
