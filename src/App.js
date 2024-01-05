import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


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
    //       Learn React Ozgee
    //     </a>
    //   </header>
    // </div>

    <div>
      <h1>My React App</h1>
      <p>Welcome to my React App, more to come...</p>
      <Header>

      </Header>

      <p className='xyz'>lorem ipsum  lore ipsum 
      lorem ipsum  lore ipsum 
      lorem ipsum  lore ipsum 
      lorem ipsum  lore ipsum        
      </p>

      <label htmlFor ="myinput"> 
      Name :
        <input id =" myinput"/>
      </label>


    </div>
  );
}

export default App;
