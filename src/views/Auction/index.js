import {
  Button,
  Card,
  CardActions,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CardBody from "components/Card/CardBody";
import Form from "components/Form";
import Header from "components/Header/Header";
import { SnackbarProvider } from "notistack";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { firestore } from "../../firebase/index";

const useStyles = makeStyles((theme) => ({
  root: {},
  typography: {
    margin: "8px 0px",
  },
}));

export default function Auction({ user }) {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [hide, setHide] = useState(true);

  const handleAddition = () => {
    setHide(false);
  };

  const fetchFromFirestore = () => {
    const dataArray = [];
    firestore
      .collection("auctionData")
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

  useEffect(() => {
    fetchFromFirestore();
  }, []);

  if (data === null) {
    return <h1>Loading Data, Hang Tight!...</h1>;
  }

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div style={{ padding: "32px", marginTop: "40px" }}>
        <Typography variant="h3" align="center" style={{ marginTop: "32px" }}>
          All popular Auctions
        </Typography>
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} md={4} lg={3} style={{ margin: "45px 0px" }}>
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
                    {item.dbname}
                  </Typography>
                </div>
                <CardBody style={{ flexGrow: 1 }}>
                  <Typography className={classes.typography}>
                    {" "}
                    {item.description}{" "}
                  </Typography>
                  <Typography className={classes.typography}>
                    category: {item.category}
                  </Typography>
                  {item.topic !== "Others" ? (
                    <Typography className={classes.typography}>
                      About: {item.topic}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <Typography className={classes.typography}>
                    By: {item.name}
                  </Typography>
                  <Typography className={classes.typography}>
                    Dataset Size: {item.dataset_size}
                  </Typography>
                </CardBody>
                <div>
                  <CardBody>
                    Want to know more and use it in your next ML Model?
                  </CardBody>
                  <CardActions style={{ margin: "10px 18px" }}>
                    <Button
                      fullWidth
                      className="round block accent"
                      href={item.link}
                      target="_blank"
                    >
                      Request Claim {item.download_size}
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12} md={4} lg={3} style={{ margin: "45px 0px" }}>
            <HashLink smooth to="#form">
              <Card
                elevation={16}
                onClick={handleAddition}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#E5F6F2",
                  padding: "40px 30px",
                  minHeight: "400px",
                  textAlign: "center",
                  justifyContent: "space-around",
                }}
              >
                <img src="/icons/plus.svg" alt="" height="200px"></img>
                <Typography variant="h6">Add your data for auction</Typography>
              </Card>
            </HashLink>
          </Grid>
        </Grid>
        <h1 style={{ fontWeight: 700, margin: "100px 20px 0px" }}></h1>
        <Hidden xsUp={hide}>
          <SnackbarProvider>
            <Form
              id="form"
              title=" Get your Data Auctioned by the rest"
              user={user}
              hide={hide}
              setHide={setHide}
            />
          </SnackbarProvider>
        </Hidden>
      </div>
    </div>
  );
}
