import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import shopData from '../redux/shop/shop.data';

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

// this function checks if the userDocs already exists in firestore users collection, return userRef if exists and creates one if does not exists
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
                cartItems: [],
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

// adding items to firestore (DEVELOPMENT FUNCTION)
export const addCollectionAndDoc = async (collectionName, datasToAdd) => {
    const collectionRef = firestore.collection(collectionName);

    // the batch is created in case connection problems occur while pushing each data to firestore, the batch will push all datas at once or no data at all
    const batch = firestore.batch();

    // collecting each data into batch
    datasToAdd.forEach(data => {
        const newDocRef = collectionRef.doc();

        batch.set(newDocRef, data);
    });

    // pushing the whole batch into firestore
    return await batch.commit();
};
// addCollectionAndDoc('plants', shopData);

// data normalization for firestore's returned data to reduce data redundancy
export const snapshotToMap = snapShot => {
    const snapShotDocsData = snapShot.docs.map(doc => doc.data());

    return snapShotDocsData.reduce((accumulator, plant) => {
        accumulator[plant.routeName] = plant;
        // console.log(accumulator);
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
