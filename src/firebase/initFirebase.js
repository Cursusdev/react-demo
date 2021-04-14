import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

// Initialize Firebase
firebase.initializeApp(config)

const app = firebase.app()
const auth = app.auth()
const emailProvider = firebase.auth.EmailAuthProvider

export default firebase
export { auth, emailProvider }
