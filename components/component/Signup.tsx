import TextField from '@mui/material/TextField';
import React from 'react'

export default function Signup() {
  return (
    <div>
        <label  style={{color : "black"}} htmlFor="">Name</label>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
    </div>
  )
}
