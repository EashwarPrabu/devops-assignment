import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from "uuid";

function App() {

  const toDoRef = useRef();
  const [toDos, setToDos] = useState([
    {key: 1, content: "Attend quiz"},
    {key: 2, content: "Complete assignment"},
  ])

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

  const deleteTodo = (key) => {
    const updatedTodo = toDos.filter(toDo => toDo.key !== key);
    setToDos(updatedTodo);
  };
  
  return (
    <div className="App" style={{height: "100vh"}}>
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
        <Box sx={{ bgcolor: '#F7F7F8', padding: 2 }}>
          <h3>CONTAINER FOR DISPLAY TODOS</h3>
          {toDos.map((toDo) => (
          <Box
            key={toDo.key}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: '#cfe8fc',
              marginY: 1,
              padding: 2,
              borderRadius: 1,
            }}
          >
            <p style={{ margin: 0 }}>{toDo.content}</p>
            <Box>
              <Button
                variant="contained"
                color="success"
                // onClick={() => editTodo(toDo.id)}
                style={{ marginRight: '0.5rem' }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteTodo(toDo.key)}
              >
                Delete
              </Button>
            </Box>
          </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default App;
