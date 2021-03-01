import React from "react";

export default function Learn() {
  // const [data, setData] = useState(null);

  // const fetchFromFirestore = () => {
  //   const dataArray = []
  //   firestore
  //     .collection("codeRepls")
  //     .orderBy("id", "asc")
  //     .get().then((snapshot) => {
  //       snapshot.forEach(doc => {
  //         console.log(doc.id, " => ", doc.data());
  //         const auctionData = doc.data();
  //         dataArray.push({ ...dataArray, ...auctionData })
  //       })
  //       setData(dataArray)
  //     }).catch(e => {
  //       console.log(e)
  //     })
  // }

  // useEffect(() => {
  //   fetchFromFirestore();
  // }, [])

  // if (data === null) {
  //   return <h1>Loading Data, Hang Tight!...</h1>
  // }

  return (
    <div>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/WateryRotatingComputing?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/LinearRegression?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/LogisticRegression?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/svm?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/NaiveBayes?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/kNearest?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/kmeans?lite=true"
      ></iframe>
      <iframe
        title="1"
        frameBorder="0"
        width="50%"
        height="700px"
        src="https://repl.it/@AbhishekKumar68/randomForest?lite=true"
      ></iframe>
      {/* {
        data.map((item, index) => {
          return <iframe frameborder="0" width="50%" height="700px" style={{marginBottom: '40px'}} src={item.link}></iframe>
        })
      } */}
    </div>
  );
}
