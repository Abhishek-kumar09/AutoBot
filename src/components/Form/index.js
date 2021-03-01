import {
  Button,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import {
  SelectValidator,
  TextValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";
import { firestore } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "0px auto 100px",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
  mainHeading: {
    fontWeight: 700,
    color: "#000",
  },
  container: {
    padding: "10% 12%",
  },
  subhead: {
    padding: "10px 0",
  },
  textField: {
    marginBottom: "16px",
    background: "#e2e2e2",
  },
  btn: {
    padding: "13px",
  },
  submissions: {
    padding: "10px 0",
    width: "80px",
    height: "50px",
  },
  extraPadding: {
    padding: "20px 0px",
  },
  rightPadding: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "10px",
    },
  },
  leftPadding: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10px",
    },
  },
}));

function Form({ title, user, hide, setHide, ...rest }) {
  const classes = useStyles();

  const [formData, updateFormData] = useState({});
  const [submitting, setSubmitting] = useState(0);

  useEffect(() => {
    console.log(user);
    if (user) {
      updateFormData({
        email: user.email,
        name: user.displayName,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    setSubmitting(1);
    formData.window = window.location.href.split("/")[3];
    e.preventDefault();
    firestore
      .collection("auctionData")
      .doc(`${formData.email}_${formData.dbname}`)
      .set(formData)
      .then(() => {
        setSubmitting(0);
        enqueueSnackbar(
          "Your Data is received to us and we are grinding it for a purpose",
          { variant: "success" }
        );
        setTimeout(() => {
          enqueueSnackbar("Hang tight, usually we reply in 4 working days", {
            variant: "info",
          });
        }, 1000);
        if (hide === false) {
          setTimeout(() => {
            setHide(true);
          }, 4000);
        }
      })
      .catch((e) => {
        enqueueSnackbar("Shit! something bad happened");
      });
  };

  const categories = [
    "Audio",
    "Image",
    "Object Detection",
    "Segmentation",
    "Agriculture",
    "Science",
    "General",
    "Emotion",
    "Social",
    "Structured",
    "Text",
    "Models",
    "NLP",
    "Others",
  ];

  return (
    <Paper elevation={20} className={classes.root} {...rest}>
      <Container className={classes.container}>
        <Typography align="center" className={classes.mainHeading} variant="h3">
          {title}
        </Typography>
        <Typography
          align="center"
          className={classes.extraPadding}
          variant="subtitle2"
        >
          All the data is first verified and then publicly visible, you can
          ofcourse hide it from public
        </Typography>
        <Typography className={classes.subhead} variant="h6" color="primary">
          Contact Information
        </Typography>
        <ValidatorForm onSubmit={handleSubmit}>
          <Typography variant="caption">Name</Typography>
          <TextValidator
            key="name"
            placeholder="What should we call You"
            className={classes.textField}
            variant="outlined"
            value={formData.name}
            fullWidth
            name="name"
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["This is a required field"]}
          />

          <Grid container justify="space-between">
            <Grid md={6} xs={12} className={classes.rightPadding}>
              <Typography variant="caption">Contact Number</Typography>
              <TextValidator
                key="contact"
                placeholder=""
                className={classes.textField}
                variant="outlined"
                value={formData.phone}
                fullWidth
                name="phone"
                onChange={handleChange}
                validators={[
                  "required",
                  "matchRegexp:^[+]*[(]*[+]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$",
                ]}
                errorMessages={[
                  "This is a required field",
                  "Please enter a valid contact number",
                ]}
              />
            </Grid>
            <Grid md={6} xs={12} className={classes.leftPadding}>
              <Typography variant="caption">Email</Typography>
              <TextValidator
                key="email"
                className={classes.textField}
                variant="outlined"
                value={formData.email}
                fullWidth
                name="email"
                onChange={handleChange}
                validators={["required", "isEmail"]}
                errorMessages={[
                  "This is a required field",
                  "Please enter a valid email",
                ]}
              />
            </Grid>
          </Grid>

          <Typography className={classes.subhead} variant="h6" color="primary">
            Dataset Information
          </Typography>

          <Typography variant="caption">Dataset Type</Typography>
          <SelectValidator
            key="topic"
            placeholder="Does it fall in some category"
            name="topic"
            className={classes.textField}
            variant="outlined"
            value={formData.topic}
            fullWidth
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["This is a required field"]}
          >
            {categories.map((topic) => {
              return (
                <MenuItem style={{ backgroundColor: "white" }} value={topic}>
                  {topic}
                </MenuItem>
              );
            })}
          </SelectValidator>

          <Typography variant="caption">Name</Typography>
          <TextValidator
            key="dbname"
            name="dbname"
            placeholder="What should we call your Dataset"
            className={classes.textField}
            variant="outlined"
            value={formData.dbname}
            fullWidth
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["This is a required field"]}
          />

          <Typography variant="caption">Category</Typography>
          <TextValidator
            key="category"
            name="category"
            placeholder="Does it fall in some category"
            className={classes.textField}
            variant="outlined"
            value={formData.category}
            fullWidth
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["This is a required field"]}
          />

          <Typography variant="caption">Description</Typography>
          <TextValidator
            key="description"
            name="description"
            placeholder="Love to get the summary of it"
            multiLine
            className={classes.textField}
            variant="outlined"
            value={formData.description}
            fullWidth
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["This is a required field"]}
          />

          <Grid container justify="space-between">
            <Grid md={6} xs={12} className={classes.rightPadding}>
              <Typography variant="caption">Dataset Size expanded</Typography>
              <TextValidator
                key="dataset_size"
                placeholder="in GB or MB"
                className={classes.textField}
                variant="outlined"
                value={formData.dataset_size}
                fullWidth
                name="dataset_size"
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["This is a required field"]}
              />
            </Grid>
            <Grid md={6} xs={12} className={classes.leftPadding}>
              <Typography variant="caption">Download Size</Typography>
              <TextValidator
                key="download_size"
                className={classes.textField}
                placeholder="The archived download size"
                variant="outlined"
                value={formData.download_size}
                fullWidth
                name="download_size"
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["This is a required field"]}
              />
            </Grid>
          </Grid>

          <Typography variant="caption">
            Link to datset drive or storage
          </Typography>
          <TextValidator
            key="link"
            className={classes.textField}
            placeholder="Can we sneak into your database, just joking. Your dataset link"
            variant="outlined"
            value={formData.link}
            fullWidth
            name="link"
            onChange={handleChange}
            validators={["required", "matchRegexp:^(http(s)?://)"]}
            errorMessages={[
              "This is a required field",
              "Enter Correct dataset link",
            ]}
          />

          <div style={{ padding: "30px 0 15px" }}>
            <Typography style={{ margin: 0 }} variant="caption" color="initial">
              By continuing, you agree to the Autobot Terms of Use and Privacy
              Policy
            </Typography>
          </div>

          {submitting === 0 ? (
            <Button
              className="block accent round"
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              style={{
                marginTop: "32px",
                padding: "10px",
              }}
            >
              Submit Request
            </Button>
          ) : (
            <div className={classes.submissions}>
              <CircularProgress />
            </div>
          )}
        </ValidatorForm>
      </Container>
    </Paper>
  );
}

export default Form;
