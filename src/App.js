import { Grid } from "@mui/material";
import "./App.css";
import Header from "./component/Header";
import MainComponent from "./component/mainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid p={2}>
          <Header />
          
        </Grid>
        
      </header>
      <Grid height={"100%"}>
        <MainComponent />
        </Grid>
    </div>
  );
}

export default App;
