import React from 'react'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
// import dayjs from 'dayjs';
export const Addnotes = () => {
  return (
    <Box>
    <Grid rowSpacing={2}> 
      <h1>ID :   XXXX</h1>
      <h1>TITLE: <TextField id="outlined-basic" label="Title" variant="outlined" /></h1>
      <h1>DISCRIPTION: <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
          /></h1>
          <h1>COMPLETION DATE: <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
          <DatePicker label="Basic date picker" />
          </DemoContainer>
          </LocalizationProvider></h1>
          <h1>IMPORTANCE: </h1>
          <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
          </Button>
          <Button variant="contained" endIcon={<DoneIcon />}>
          Create
          </Button>
          </Stack>
          <p></p>
    </Grid>
    </Box>
  )
}
