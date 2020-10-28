import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBRn0a7VvZXq_FTE3EdIBYaFQ4cQHi6LNk",
  authDomain: "rewardme-15944.firebaseapp.com",
  databaseURL: "https://rewardme-15944.firebaseio.com",
  projectId: "rewardme-15944",
  storageBucket: "rewardme-15944.appspot.com",
  messagingSenderId: "591629277494",
  appId: "1:591629277494:web:c41bb09222b6bd12c4fb97"
};
  // Initialize Firebase
 
  let app=
  firebase.initializeApp(firebaseConfig);
  export const db = app.database();
