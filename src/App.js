import logo from './Goonts.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> JSX is cool </h1>
        <img src={logo} className='App-logo' alt='logo' />
        <p>My name is Ahmed Abdulla and I am going to master</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
