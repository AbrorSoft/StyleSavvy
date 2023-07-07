import {initializeApp} from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB58yEd2LqR8HgCwBSujOv9UeXWkIexQNA",
    authDomain: "style-savvy-db.firebaseapp.com",
    projectId: "style-savvy-db",
    storageBucket: "style-savvy-db.appspot.com",
    messagingSenderId: "788340245605",
    appId: "1:788340245605:web:656f613c974d6a4bca328c"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider()
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider)
  export const db = getFirestore()
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) =>{
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
      objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    });
    await batch.commit()
    console.log('done')
  }
  export const getCategoriesAndDocuments = async ()=> {
    const collectionRef  = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categorieMap = querySnapshot.docs.reduce((acc, docSnapshot)=> {
      const {title, items} = docSnapshot.data()
      acc[title.toLowerCase()] = items
      return acc
    }, {})
    return categorieMap
  }
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=>{
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await  getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch(err){
            console.log("error creating user", err.message)
        }
    }
    return userDocRef
  }
  export const  createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password )return
    return await createUserWithEmailAndPassword(auth, email, password)
  }
   export const  signinAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password )return
    return await signInWithEmailAndPassword(auth, email, password)
  }
  export const signOutUser = async ()  => await signOut(auth)

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
  // {
  //   if(!callback) return
  //   return onAuthStateChanged(auth, callback)
  // }