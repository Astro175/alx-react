import './App.css';
import Notifications from './Notifications/Notifications';
import Footer from './footer/Footer';
import Header from './header/header';
import Login from './login/Login';

function App() {
  return (
    <div>
      <Notifications />
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <Login/>
      </div>
       <div data-testid="App-footer" className="App-footer">
        <Footer/>
       </div>
      
    </div> 
  );
}

export default App;
