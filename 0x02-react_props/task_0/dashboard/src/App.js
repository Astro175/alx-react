import PropTypes from 'prop-types';
import './App.css';
import CourseList from './CourseList/CourseList';
import Notifications from './Notifications/Notifications';
import Footer from './footer/Footer';
import Header from './header/header';
import Login from './login/Login';

function App({ isLoggedIn }) {
  return (
    <div>
      
      <div className="App-header">
        <Header/>
        <Notifications />
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {isLoggedIn ? <CourseList /> : <Login/>}
      </div>
       <div data-testid="App-footer" className="App-footer">
        <Footer/>
       </div>
      
    </div> 
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
