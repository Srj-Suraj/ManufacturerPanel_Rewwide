import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h4>SRJ</h4>
    //   </header>
    // </div>

        <Router>
          <Routes>
            <Route path="/" element={<> <Login/> </>} /> 
                  {/* <Login/> */}
          </Routes>
        </Router>
  );
}

export default App;
