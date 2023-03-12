import { Box, Container } from "@mui/material";
import LineChart from "../components/LineChart";
import "./App.css";

function App() {
  return (
    <Box className="app-header">
      <Container>
        <LineChart />
      </Container>
    </Box>
  );
}

export default App;
