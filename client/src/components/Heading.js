import React from 'react'
import { Grid } from "@material-ui/core";


function Headings() {
    return (
        <div>
    
    <Grid container  >
         <Grid item lg={8} md={8} sm={12} xs={12}>
           <h2 className='inter'>
             Internation News
           </h2>
         </Grid>
           <Grid item lg={4} md={4}>

           </Grid>
       </Grid>
           
        </div>
    )
}

export default Headings


