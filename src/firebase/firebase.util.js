import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBFKufrt9grjfdhG-UMzvss175ibpLphJs',
    authDomain: 'ryus-greeneries.firebaseapp.com',
    projectId: 'ryus-greeneries',
    storageBucket: 'ryus-greeneries.appspot.com',
    messagingSenderId: '653760314209',
    appId: '1:653760314209:web:b54bd12170eb8ffcd16320',
};

// init firebase app
firebase.initializeApp(firebaseConfig);

// this function checks if the userDocs already exists in firestore users collection, return if exists and creates one if does not exists
export const createUserDocument = async (userProfile, otherData) => {
    if (!userProfile) return;

    const userRef = firestore.doc(`users/${userProfile.uid}`);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const { displayName, email } = userProfile;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...otherData,
            });
        } catch (error) {
            alert('Error creating user account:', error.message);
        }
    }

    return userRef;
};

export function getCurrentUser() {
    return new Promise((res, rej) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            res(user);
        }, rej);
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
