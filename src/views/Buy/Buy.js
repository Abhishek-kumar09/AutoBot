import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { StarOutlined } from "@material-ui/icons";
import Pagination from "@material-ui/lab/Pagination";
import Header from "components/Header/Header";
import CustomizedInputBase from "components/search";
import React from "react";
import {
  ClearRefinements,
  Configure,
  connectHits,
  connectPagination,
  RefinementList,
} from "react-instantsearch-dom";
import "./Buy.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#fff'
  },
  typography: {
    margin: "8px 0px",
  },
  grid: {
    backgroundColor: "#fff",
    color: "#000",
    marginTop: "40px",
  },
  rlist: {
    "& .ais-RefinementList-labelText ": {
      color: "#393e46",
    },
    "& .ais-RefinementList-count": {
      color: "#29a19c",
    },
  },
  pagination: {
    width: "max-content",
    margin: "40px auto",
  },
}));

const Hits = ({ hits }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      style={{
        flexWrap: "wrap",
      }}
      className="cards-container"
    >
      {hits.map((hit, index) => (
        <Hit key={hit.objectID} item={hit} index={index} />
      ))}
    </Grid>
  );
};

const CustomHits = connectHits(Hits);

function Hit({ item, index }) {
  // const [docIdToInterestScore, setInterestScore] = useState({});
  const classes = useStyles();

  // const incrementInterestScore = (docId, currentInterestScore) => {

  // }

  const getColorClass = (category) => {
    switch (category) {
      case "Image Classification":
      case "Object Detection":
      case "Video":
      case "Structure":
      case "Image":
        return "image";
      case "Audio":
        return "audio";
      default:
        return "text";
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Card
        elevation={10}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowY: "hidden",
          marginBottom: "20px",
        }}
        className="card"
      >
        <div className={`circle ${getColorClass(item.category)}`}>
          <Typography align="center" variant="h4">
            {item.name}
          </Typography>
        </div>
        <CardContent style={{ flexGrow: 1 }}>
          <Typography className={classes.typography}>
            {" "}
            {typeof item.description == "string"
              ? item.description.length < 200
                ? item.description
                : `${item.description.substring(0, 200)}...`
              : " "}{" "}
          </Typography>
          <Typography className={classes.typography}>
            category: {item.category}
          </Typography>
          <Typography className={classes.typography}>
            Rating:{" "}
            <StarOutlined style={{ paddingTop: "8px", color: "#FFD700" }} />{" "}
            {item.rating}
          </Typography>
        </CardContent>
        <CardActions style={{ margin: "10px 18px" }}>
          <Button
            fullWidth
            className="round block"
            href={item.test_set_url}
            style={{ marginRight: "8px" }}
          >
            Test
          </Button>
          <Button
            fullWidth
            className="round block"
            href={item.train_set_url}
            style={{ marginLeft: "8px" }}
          >
            Train
          </Button>
        </CardActions>
        <CardActions style={{ margin: "0px 18px 10px" }}>
          <Button
            fullWidth
            className={`round block accent ${getColorClass(item.category)}`}
            href={item.develop_set_url}
          >
            Full Package{" "}
            {item.dataset_size.split(" ")[0] === "Unknown"
              ? "Download"
              : item.dataset_size}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Buy({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <h1 style={{ fontWeight: 700, margin: "100px 20px 0px" }}>
        Explore our library of datasets!
      </h1>

      <Container style={{ padding: "32px" }}>
        <Grid container spacing={9}>
          <Grid item xs={12} sm={6} md={3} className={classes.grid}>
            <ClearRefinements />
            <h3>Apply Filters</h3>
            <h6>Categories</h6>
            <RefinementList attribute="category" className={classes.rlist} />
            <h6>Ratings</h6>
            <RefinementList attribute="rating" className={classes.rlist} />
            <Configure hitsPerPage={9} />
          </Grid>
          <Grid container item xs={12} sm={6} md={9}>
            <CustomizedInputBase />
            <CustomHits />
            <CustomPagination />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const PaginationImplementation = ({ nbPages, refine }) => {
  const classes = useStyles();

  return (
    <Pagination
      variant="text"
      color="primary"
      boundaryCount={3}
      size="large"
      className={classes.pagination}
      count={nbPages}
      onChange={(event, newPage) => {
        event.preventDefault();
        refine(newPage);
      }}
    />
  );
};

const CustomPagination = connectPagination(PaginationImplementation);
