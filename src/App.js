import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {

  const toDoRef = useRef();
  const [toDos, setToDos] = useState([]);

  const saveToDo = () => {
    const enteredInput = toDoRef.current.value;
    if(enteredInput !== "") {
      const newToDo = {
        key: uuidv4(),
        content: enteredInput,
      }
      setToDos(existingToDo => [...existingToDo, newToDo])
    }
    toDoRef.current.value = "";
  }

  return (
    <div className="App">
      <h1>DevOps ToDo List</h1>
      
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
        <h3>Create/Edit TODOS</h3>
        <div>
          <TextField 
            inputRef={toDoRef}
            id="filled-basic" 
            label="Add Todo" 
            variant="filled" 
            style={{width: "375px", marginBottom: "1rem"}}
          />
          <Button 
            variant="contained" 
            onClick={saveToDo}
            style={{marginLeft: "1rem", width: "100px", height: "55px"}}
          >
            ADD
          </Button>
        </div>
        </Box>
      </Container>

      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <h3>CONTAINER FOR DISPLAY TODOS</h3>
        </Box>
      </Container>
    </div>
  );
}

export default App;
