import React from 'react'
import { Grid } from "@material-ui/core";
import { Button } from 'react-bootstrap';
import './style.css'



function Corona() {
    return (
        <div>
          <div className='covid-main'>
           <Grid container  >
           <Grid container  direction='row'>
               <Grid item lg={3} md={3} sm={12} xs={12}>
                   <Button className="btn-corona">
                       Live: CoronaVirus In Pakistan
                   </Button>
               </Grid>
               <Grid item lg={2} md={2} sm={12} xs={12}>
                   <span>Total Cases</span>
                   
                   <Button className="btn-corona-1">
                       633.7K
                   </Button>
                   <Grid item sm={12}>
                   <span>ActiveCases</span>
                   
                   <Button className="btn-corona-1">
                       633.7K
                   </Button>
                   </Grid>
               </Grid> 
               <Grid item lg={2} md={2} sm={12} xs={12}>
                   <span>Today's Cases</span>
               
                   <Button className="btn-corona-1">
                       633.7K
                   </Button>
                   <Grid item sm={12}>
                   <Button className="btn-corona-2">
                       Explore More
                   </Button>
                   </Grid>
                  
               </Grid>
               <Grid item lg={2} md={2} sm={12} xs={12}>
                   <span>Total Deaths</span>
                    
                   <Button className="btn-corona-1">
                   633.7K
                   </Button>
               </Grid>
               <Grid item lg={2} md={2} sm={12} xs={12}>
                   <span>Total Recoverd</span>
                   
                   <Button className="btn-corona-1">
                   633.7K
                   </Button>
               </Grid>
               </Grid>
               </Grid>
               </div>
        </div>
    )
}

export default Corona