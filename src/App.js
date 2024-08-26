import './App.css';

function App() {
  return (
    <div className="App">
      <h1>DevOps ToDo List</h1>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <h3>CONTAINER FOR ADD/EDIT TODOS</h3>
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
