import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { firestore } from "../../firebase/index";
import "./TopHits.css";

const _ = require("lodash");

export default function TopHits({ user }) {
  const [data, setData] = useState([]);

  const fetchFromFirestore = () => {
    const dataArray = [];
    firestore
      .collection("datasets")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          const auctionData = doc.data();
          dataArray.push({ ...dataArray, ...auctionData });
        });
        setData(dataArray);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rankDataset = () => {
    let clonedDataset = _.cloneDeep(data);
    clonedDataset.sort((dataset_A, dataset_B) => {
      if (
        Array.isArray(dataset_A) &&
        Array.isArray(dataset_B) &&
        dataset_A.interest_score !== dataset_B.interest_score
      )
        return dataset_A.interest_score > dataset_B.interest_score;
      else return dataset_A.name > dataset_B.name;
    });

    setData(clonedDataset);
  };

  useEffect(() => {
    fetchFromFirestore();
    rankDataset();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const displayData = () => {
    return data.map((aDataset, index) => (
      <tr key={index}>
        <th>{index + 1}</th>
        <th>{aDataset.name}</th>
        <th>{aDataset.rating}</th>
        <th>{aDataset.dataset_size}</th>
        <th>{aDataset.category}</th>
        <th>{aDataset.interest_score}</th>
      </tr>
    ));
  };

  if (data === null) {
    return <h1>Loading Data, Hang Tight!...</h1>;
  }

  return (
    <div id="top-hits">
      <Header user={user} />
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Dataset</th>
            <th>Rating</th>
            <th>Size</th>
            <th>Category</th>
            <th>Favorite Score</th>
          </tr>
        </thead>
        <tbody>{displayData()}</tbody>
      </table>
    </div>
  );
}
