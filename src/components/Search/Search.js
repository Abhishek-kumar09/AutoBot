const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");
const firebase = require("firebase");

// load values from the .env file in this directory into process.env
dotenv.load();

// configure firebase
firebase.initializeApp({
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

// Get all datasets from Firebase
database.ref("/").once("value", (db_datasets) => {
  // Build an array of all records to push to Algolia
  const records = [];
  db_datasets.forEach((db_dataset) => {
    // get the key and data from the snapshot
    const childKey = db_dataset.key;
    const childData = db_dataset.val();
    // We set the Algolia objectID as the Firebase .key
    childData.objectID = childKey;
    // Add object for indexing
    records.push(childData);
  });

  // Add or update new objects
  index
    .saveObjects(records)
    .then(() => {
      console.log("Datasets imported into Algolia");
    })
    .catch((error) => {
      console.error("Error when importing Datasets into Algolia", error);
      process.exit(1);
    });
});
