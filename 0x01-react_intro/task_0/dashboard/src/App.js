import './App.css';
import Notifications from './Notifications';
import logo from './holberton_logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div>
      <Notifications />
      <div className="App-header">
        <img src={logo} alt="" className='logo-img'/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>{getFullYear()} {getFooterCopy()} Copyright 2020 - holberton School</p>
      </div>
    </div> 
  );
}

export default App;
