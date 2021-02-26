import React, { useState, useEffect } from 'react'
import { firestore } from '../../firebase/index';


export default function Learn() {
  const [data, setData] = useState(null);

  const fetchFromFirestore = () => {
    const dataArray = []
    firestore
    .collection("codeRepls")
    .orderBy("id", "asc")
    .get().then((snapshot) => {
      snapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        const auctionData = doc.data();
        dataArray.push({ ...dataArray, ...auctionData })
      })
      setData(dataArray)
    }).catch(e => {
      console.log(e)
    })
  }

  useEffect(() => {
    fetchFromFirestore();
  }, [])

  if (data === null) {
    return <h1>Loading Data, Hang Tight!...</h1>
  }

  return (
    <div>      
      {
        data.map((item, index) => {
          return <iframe frameborder="0" width="50%" height="700px" style={{marginBottom: '40px'}} src={item.link}></iframe>
        })
      }
    </div>
  )
}