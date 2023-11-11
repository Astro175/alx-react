import './App.css';
import Notifications from './Notifications';
import logo from './holberton_logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div>
      <Notifications />
      <div data-testid="App-header" className="App-header">
        <img src={logo} alt="" className='logo-img'/>
        <h1>School dashboard</h1>
      </div>
      <div data-testid="App-body" className="App-body">
        <p>Login to access the full dashboard</p>
        <form action="" className="form">
          <label htmlFor="email">Email:</label>
          <input type="text" id='email'/>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
          <button>OK</button>
        </form>
      </div>
      <div data-testid="App-footer" className="App-footer">
        <p>{getFullYear} {getFooterCopy} Copyright 2020 - holberton School</p>
      </div>
    </div> 
  );
}

export default App;
