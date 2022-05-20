import Header from "./header"
import Main from "../pages/home"
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="">
      <Header/>
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
