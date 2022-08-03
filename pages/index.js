import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { writeDailySpecial, getDailySpecial, getDailySpecials } from '../firebase/users'
import { useEffect, useState } from 'react'
import GoogleMapComponent from '../components/GoogleMapComponent'

import RestaurantList from '../components/RestaurantList'
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {

  // useEffect(() => {
  //   const data = getDailySpecial().then((a) => {
  //     setLoading(false)
  //     setPosts(a)
  //     return a
  //   })
  //   const printSpecial = async () => {
  //     const d = await data
  //     console.log('d', d)
  //     setPosts(d)
  //   }
  //   printSpecial()
  // }, [])


  return (
    <div>
      <div>
        <h1 className='m-5' style={{ textAlign: "center" }}>Local Restaurants</h1>
      </div>
      <div className='container justify-content-center align-items-center' >
        <div className='row'>
          <div className='col-md-9'>
            <div style={{ height: "100%", width: '100%', minHeight: '35vh' }}>
              <GoogleMapComponent ></GoogleMapComponent>
            </div>
          </div>
          <RestaurantList ></RestaurantList>
        </div>
      </div>
    </div>

  )
}
