import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import { padding } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function BasicTextFields() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e: { preventDefault: () => void; }) => {
    const student = { name, address }
    e.preventDefault()
    console.log(student)
    fetch("http://localhost:8080/'API'", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New Studend Added")
    })
  }

  useEffect(() => {
    fetch("http:localhost:8080/student/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      }
      )
  }, [])

  return (
    <Container maxWidth="sm">
    <Box component="form" sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }} noValidate autoComplete="off" >
      <Paper style={paperStyle}>

        <h1 style={{ color: "gray" }}>
          <u>Add Student</u>
        </h1>
        <div>
          <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth value={name}
            onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth value={address}
            onChange={(e) => setAddress(e.target.value)} />
        </div>
        <br />
        
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary" onClick={handleClick} >
            Submit
          </Button>
        </Stack>
      </Paper>

      <h1 style={{margin: "10px", padding: "15px",textAlign:"center", color: "gray"}}>
        <u>Students</u>
      </h1>
      <Paper  style={paperStyle}>

        {students.map(student=>(
          <Paper elevation={3} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student}>
            Id:{student} <br />
            Name:{student} <br />
            Address:{student}

          </Paper>
        ))}
      </Paper>
    </Box>
    </Container>
  );
}