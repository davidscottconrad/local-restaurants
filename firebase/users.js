import { firestore } from "./initFirebase";
import { getFirestore, collection, setDoc, doc, getDoc, query, getDocs } from 'firebase/firestore';
import { useState } from "react";

// const getUsers = async () => {
//     const snapshot = await firestore2.collection("users").get()
//     snapshot.docs.forEach(docs => console.log(doc.data()))
// }



function writeDailySpecial(docData1) {
    const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14')
    setDoc(specialOfTheDay, docData1, { merge: true })
        .then(() => console.log('value is in dataabase'))
        .catch((error) => console.log('error passing into db'))
}

async function getDailySpecials() {

    const q = query(collection(firestore, "dailySpecial"));
    const data3 = []

    const querySnapshot = await getDocs(q);
    //console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(" => ", doc.data());
        data3.push(doc.data())


    });
    //console.log(data3)
    return data3
}

async function getDailySpecial() {
    const docRef = doc(firestore, "dailySpecial/2021-09-14");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data()
        //console.log("success");
        return data


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    //console.log('data desc', docSnap.data())


    ////////////
    // const allSpecialss = getDailySpecials().then((a) => {
    //     setLoading2(false)
    //     setposts(a)
    //     return a
    // })
    // const allSpecials = async () => {
    //     const b = await allSpecialss
    //     setposts(b)
    //     console.log('bbbbbb', b)
    // }
    // allSpecials()
    // console.log('pppppppppp', posts)



}




export { writeDailySpecial, getDailySpecial, getDailySpecials }
