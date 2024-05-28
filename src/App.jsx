import { HashRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Header />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
