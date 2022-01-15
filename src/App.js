import logo from './logo.svg';
import './App.css';

import {Router,Route,Outlet, ReactLocation} from 'react-location';

import Login from './Login/Login';
import Page from './Login/Page';

export const routes:Route[] =[
  {
    path:"/",
    element:<Login/>,

  },
  {
    path:"/page",
    element:<><Page/><Login/></>,
  },
];



const location = new ReactLocation();

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

        <Router routes={routes} location={location}>
          <Outlet  />
        </Router>

        // <Login/>


  );
}

export default App;
