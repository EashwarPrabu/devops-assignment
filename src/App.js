import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, content: "Attend quiz"},
    {id: 2, content: "Complete assignment"},
  ])

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodo);
  };

  return (
    <div className="App" style={{height: "100vh"}}>
      <h1>DevOps ToDo List</h1>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#F7F7F8' }}>
          <h3>CONTAINER FOR ADD/EDIT TODOS</h3>
        </Box>
      </Container>

      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#F7F7F8', padding: 2 }}>
          <h3>CONTAINER FOR DISPLAY TODOS</h3>
          {todos.map((todo) => (
          <Box
            key={todo.id}
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
            <p style={{ margin: 0 }}>{todo.content}</p>
            <Box>
              <Button
                variant="contained"
                color="success"
                // onClick={() => editTodo(todo.id)}
                style={{ marginRight: '0.5rem' }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteTodo(todo.id)}
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
