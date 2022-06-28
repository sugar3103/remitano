import { BrowserRouter } from "react-router-dom";
import Layout from "../src/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
