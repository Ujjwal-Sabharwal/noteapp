import React from 'react'
import { Header } from '../../../Shared/Component/Header'
import { Grid } from '@mui/material'
import { Menu } from '../../../Shared/Component/Menu'
import { Main } from '../../../Shared/Component/Main'

export const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Grid container item xs={11} rowspacing={2} columnSpacing={2} >
        <Grid  item xs={2}>
          <Menu/>
        </Grid>
        <Grid item xs={10} sx={{ boxShadow: 3 }}>
          <Main/>
        </Grid>
      </Grid>
    </div>
    
  )
}
