import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Header from "components/Header/Header";
import React, { useEffect, useState } from "react";
import { database } from "../../firebase/index";

import {
  ClearRefinements,
  RefinementList,
  Configure,
  connectHits,
  Pagination,
} from "react-instantsearch-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  typography: {
    margin: "8px 0px",
  },
}));

const Hits = ({ hits }) => {
  return (
    <Grid
      container
      spacing={9}
      direction="row"
      justify="space-evenly"
      alignItems="center"
      style={{
        backgroundColor: "blue",
        flexWrap: "wrap",
      }}
    >
      {hits.map((hit, index) => (
        <Hit key={hit.objectID} item={hit} index={index} />
      ))}
    </Grid>
  );
};

const CustomHits = connectHits(Hits);

function Hit({ item, index }) {
  const classes = useStyles();

  return (
    <Grid item xs={3} md={3} lg={3} spacing={4} style={{ margin: "45px 0px" }}>
      <Card
        elevation={10}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#E5F6F2",
        }}
      >
        <div
          style={{
            padding: "16px",
            backgroundColor: `#0${index % 10}AE86`,
            color: "#fff",
          }}
        >
          <Typography align="left" variant="h4">
            {item.name}
          </Typography>
        </div>
        <CardContent style={{ flexGrow: 1 }}>
          <Typography className={classes.typography}>
            {" "}
            {item.description}{" "}
          </Typography>
          <Typography className={classes.typography}>
            category: {item.category}
          </Typography>
        </CardContent>
        <CardActions style={{ margin: "10px 18px" }}>
          <Button fullWidth className="round block accent">
            Get Now {item.dataset_size}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Buy() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbref = database.ref("/");
    dbref.on("value", (snapshot) => {
      const datasets = snapshot.val();
      const dataSetArray = [];
      for (let i in datasets) {
        // console.log(datasets[i])
        dataSetArray.push({ i, ...datasets[i] });
      }
      console.log(dataSetArray);
      setData(dataSetArray);
    });
  }, []);

  if (data === null) {
    return <h1>Loading Data, please wait...</h1>;
  }

  return (
    <div>
      <Header />
      <h1 style={{ fontWeight: 700, margin: "100px 20px 0px" }}>
        Explore our library of datasets!
      </h1>

      <div style={{ padding: "32px" }}>
        <Grid
          item
          spacing={3}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Grid spacing={3}>
            <ClearRefinements />
            <h3>Data types</h3>
            <RefinementList attribute="category" />
            <Configure hitsPerPage={20} />
          </Grid>
          <div
            style={{
              backgroundColor: "blue",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <CustomHits />
          </div>
        </Grid>
      </div>
    </div>
  );
}
