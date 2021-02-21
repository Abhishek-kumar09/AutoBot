import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import Header from 'components/Header/Header';
import React, { useEffect, useState } from 'react';
import { database } from '../../firebase/index';

const useStyles = makeStyles(theme => ({
  root: {},
  typography: {
    margin: '8px 0px'
  }
}))

export default function Auction() {

  const classes = useStyles();
  const [data, setData] = useState(null);


  useEffect(() => {
    const dbref = database.ref('/')
    dbref.on('value', (snapshot) => {
      const datasets = snapshot.val();
      const dataSetArray = []
      for (let i in datasets) {
        // console.log(datasets[i])
        dataSetArray.push({ i, ...datasets[i] })
      }
      console.log(dataSetArray)
      setData(dataSetArray)
    })
  }, [])

  if (data === null) {
    return <h1>Loading Data, please wait...</h1>
  }

  return (
    <div>
      <Header />
      <h1 style={{ fontWeight: 700, margin: '100px 20px 0px' }}>
        Popular Auctions!
      </h1>

      <div style={{padding: '32px'}}>
        <Grid container spacing={3}>

          {data.map((item, index) => (
            <Grid item xs={12} md={4} lg={3} style={{ margin: '45px 0px' }}  >
              <Card elevation={10} style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#E5F6F2' }}>
                <div style={{ padding: '16px', backgroundColor: `#0${index % 10}AE86`, color: '#fff' }}>
                  <Typography align="left" variant="h4">{item.name}</Typography>
                </div>
                <CardContent style={{flexGrow: 1}}>
                  <Typography className={classes.typography}> {item.description} </Typography>
                  <Typography className={classes.typography}>category: {item.category}</Typography>
                </CardContent>
                <CardActions style={{margin: '10px 18px'}}>
                  <Button fullWidth className="round block accent">Get Now {item.dataset_size}</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>
      </div>
    </div>
  )
}