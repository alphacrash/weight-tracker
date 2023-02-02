import { Box, Container } from "@mui/material";
import "./App.css";
import { LineChart } from "./components/LineChart";

function App() {
  return (
    <Box className="App">
      <Box className="App-header">
        <Container>
          <LineChart />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
