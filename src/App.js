import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const name = 'Ozgee';
const surname = 'Ozler'; 
const isLoggedIn = false;

function App() {
  return (

    //commit 1
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

    //commit 2

    // <div>
    //   <h1>My React App</h1>
    //   <p>Welcome to my React App, more to come...</p>
    //   <Header>

    //   </Header>

    //   <p className='xyz'>lorem ipsum  lore ipsum 
    //   lorem ipsum  lore ipsum 
    //   lorem ipsum  lore ipsum 
    //   lorem ipsum  lore ipsum        
    //   </p>

    //   <label htmlFor ="myinput"> 
    //   Name :
    //     <input id =" myinput"/>
    //   </label>


    // </div>


    

    // 
    // <h1>{name}  {surname} </h1>
    // <h1>{isLoggedIn && `My name is  ${name} , surname is  ${surname}`}
    // </h1>

    // {!isLoggedIn&& 'Giris yapmadiniz, giris yapmalisiniz.'}

    <>

    <User name="Ozge" surname= "Ozler" isLoggedIn={false}/>
    <h1>
    {isLoggedIn? `Giris yapildi. My name is  ${name} , surname is  ${surname}` : 'Giris yapilmadi.'}
    </h1>
    </>
  );
}

export default App;
