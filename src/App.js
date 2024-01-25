import logo from './logo.svg';
import './App.css';
//import TestComponent from './components/functionalComponent/TestComponent';
//import TestClassComp from './components/classComponents/testClassComponent';
//import Login from './components/classComponents/loginComponent';
//import PropsComponents from './components/PropsComponents';
//import StateComponent from './components/classComponents/StateComponent';

import NavBar from './components/functionalComponents/NavBar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './components/functionalComponents/About';
import Experience from './components/functionalComponents/Experience';
import Login from './components/functionalComponents/Login';
import Home from './components/functionalComponents/Home';
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
     <NavBar />
    <Routes>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/experience" element={<Experience />}></Route>
    <Route path="/login" element={<Login />}></Route>

    </Routes>
    </BrowserRouter>
      
     
      
      <header className="App-header">
     
         {/* <StateComponent/>
         <PropsComponents name="karthi" course="MERN" /> */}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
