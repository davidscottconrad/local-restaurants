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
    <>
    {/* <div>
        <h1 className='m-1' style={{ textAlign: "center" }}>Local Restaurants</h1>
      </div> */}
    <div className='container1'>
      
      <div className='controls'>
      <RestaurantList ></RestaurantList>
      </div>
      <div className='map' >      
              <GoogleMapComponent ></GoogleMapComponent>
          {/*  */}
      </div>
    </div>
    </>
  )
}
