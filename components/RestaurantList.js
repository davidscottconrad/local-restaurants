import { useEffect, useState } from 'react'
import { firestore } from '../firebase/initFirebase'
import { writeDailySpecial, getDailySpecial, getDailySpecials } from '../firebase/users'
import { getFirestore, collection, setDoc, doc, getDoc, query, getDocs } from 'firebase/firestore';
import GoogleMapComponent from './GoogleMapComponent';
export default function RestaurantList() {
    const docData1 = {
        description: 'Yum Yum',
        price: 4,
        milk: 'Whole',
        vegan: false,
    }
    const [posts, setposts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getDailySpecials() {

            const q = query(collection(firestore, "dailySpecial"));
            const fireStoreDocumentData = []
            const querySnapshot = await getDocs(q);

            let i = 0;
            querySnapshot.forEach((doc) => {
                fireStoreDocumentData.push(doc.data())
                fireStoreDocumentData[i].id = doc.id
                i++
            });

            return fireStoreDocumentData
        }

        getDailySpecials().then((a) => {
            setLoading(false)
            setposts(a)
        })

        writeDailySpecial(docData1)


    }, [])

    if (loading) return <div>lading</div>

    const listItems = posts.map((p, i) => {
        return (
            <div id="rest-card" className='justify-content-center align-items-center mb-3 mt-3'>
                <div key={p.id} style={{ borderStyle: 'solid' }} className="card p-3">
                    <p>{p.description}</p>
                    <p>{p.milk}</p>
                    <p>{p.price}</p>
                    <p>{p.vegan}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='col-md-3'>


            {listItems}

        </div>
    )

}