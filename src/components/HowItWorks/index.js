import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';
// import Button from '../components/Button';
// import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
    fontWeight: 700
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 130,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/illustrations/1.svg"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography style={{fontWeight: 400, fontStyle: 'italic'}} align="center" color="primary">
                  {'Researchers and Enthusiasts share their datasets. '}
                  {'You build Models and we provide datasets, '}
                  {'Helping you to learn new Models and start ML'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/illustrations/2.svg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography style={{fontWeight: 400, fontStyle: 'italic'}}  align="center" color="primary">
                  We finalize the datasets to make it public through rigorous tests and powerful checks with predefined ML algorithms
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/illustrations/3.svg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography style={{fontWeight: 400, fontStyle: 'italic'}}  align="center" color="primary">
                  {'New offers every week. New experiences, new surprises. '}
                  {'Your time and Models are precious'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className="block round accent"
          component="a"
          href="/buy"
          style={{marginTop: '80px'}}
        >
          Get started
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
