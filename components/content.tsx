import { Spinner } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import Navigation from '../components/navigation/Navigation'
import Homepage from '../components/home/home'
import fire from '../api/firebase'
import Footer from './footer/Footer'

const Container = (prop: any) => {
  const [load, setLoading] = useState(true)
  const [nav, setNavigation] = useState([])
  const [headline, setHeadline] = useState([])
  const [collections, setCollections] = useState([])
  let names = ['navigation', 'headline', 'collections']

  useEffect(() => {
    names.map((e) => {
      initialize(e)
    })
  }, []);

  const initialize = async (dbname: string) => {
    const dataArray: any = [];
    fire.database().ref(dbname).once('value', snap => {
              if (snap.val()) dataArray.push(snap.val());
    }).then(() => {
        setters(dbname, dataArray);
    })
  }

  const setters = (dbname: string, result: any) =>{
    switch(dbname) {
      case 'navigation':
        setNavigation(result[0])
        break;
      case 'headline':
        setHeadline(result[0])
        break;
      case 'collections':
        setCollections(result[0])
        setLoading(false)
        break;
      default: break;
    }
  }
  
  return (
    <>
    { load ? (
      <div>
        <Spinner color="primary" className="loading" />
      </div>
    ) : (
      <>
        <Navigation navigation={nav} />
        <Homepage headline={headline} collections={collections}/>
        <Footer />
      </>
    ) }
    </>
  );
}
export default Container;