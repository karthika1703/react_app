import logo from './logo.svg';
import './App.css';
//import TestComponent from './components/functionalComponent/TestComponent';
//import TestClassComp from './components/classComponents/testClassComponent';
//import Login from './components/classComponents/loginComponent';
import PropsComponents from './components/PropsComponents';
import StateComponent from './components/classComponents/StateComponent';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <StateComponent/>
        <PropsComponents name="karthi" course="MERN" />
        
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
