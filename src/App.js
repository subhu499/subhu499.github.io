import './App.css';
// import './home.css';
import OffcanvasExample from './Pages/Navbar';
import "./Pages/Page.css";
import Allroutes from "./Components/Allroutes"

function App() {
    return (
      <div className='App'>
        <div className="container">
          <OffcanvasExample />
          <Allroutes />

        </div>
      </div>
    );
}

export default App;
