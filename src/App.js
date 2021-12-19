import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [place, setPlace] = useState("");
  const [userDetails, setUserDetails] = useState([])
  const [status, setStatus] = useState("add");
  const [id, setId] = useState("");

  const submit = () => {
    if (name, email, phoneNumber, place) {
      if (status === "add") {
        let details = {
          id: uuidv4(),
          name, email, phoneNumber, place
        }
        setUserDetails([...userDetails, details])
      } else if (status === "edit") {
        let editedDetailsUpdate = userDetails.filter(item => item.id != id)
        let editedDetails = {
          id, name, email, phoneNumber, place
        }
        setUserDetails([...editedDetailsUpdate, editedDetails])
      }
      setName("")
      setEmail("")
      setPhoneNumber("")
      setPlace("")
      setStatus("add")
    } else {
      alert("Please enter all values!")
    }
  }

  const deleteDetails = (id) => {
    console.log(id)
    let userDetailsUpdate = userDetails.filter(item => item.id != id)
    setUserDetails(userDetailsUpdate)
  }

  const editDetails = (id) => {
    console.log(id)
    let editDetailsUpdate = userDetails.filter(item => item.id == id)
    console.log(editDetailsUpdate)
    setName(editDetailsUpdate[0].name)
    setEmail(editDetailsUpdate[0].email)
    setPhoneNumber(editDetailsUpdate[0].phoneNumber)
    setPlace(editDetailsUpdate[0].place)
    setId(editDetailsUpdate[0].id)
    setStatus("edit")
  }
  console.log(userDetails)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar style={{ textAlign: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CRUD Operation
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br /><br />
      <Box style={{ display: "flex", justifyContent: "center" }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 628,
            height: 250,
          },
        }}
      >
        <Paper elevation={3} style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
          <br />
          <div>
            <TextField
              value={name}
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={email}
              style={{ marginLeft: "50px" }}
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              value={phoneNumber}
              label="Phone Number"
              variant="outlined"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              value={place}
              style={{ marginLeft: "50px" }}
              label="Place"
              variant="outlined"
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => submit()}
              color="success"
            >
              Submit
            </Button>
            <br />
            <br />
          </div>
        </Paper>
      </Box>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", overflowX: "auto" }}>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Place</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {
            userDetails.length > 0 ? userDetails.map(eachDetail => {
              return (
                <tr>
                  <td>{eachDetail.name}</td>
                  <td>{eachDetail.email}</td>
                  <td>{eachDetail.phoneNumber}</td>
                  <td>{eachDetail.place}</td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => editDetails(eachDetail.id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => deleteDetails(eachDetail.id)}
                      color="error"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            }) : <span>No datas are present</span>
          }
        </table>
      </div>
    </div>
  );
}

export default App;
