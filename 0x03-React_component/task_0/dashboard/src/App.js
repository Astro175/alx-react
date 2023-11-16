import PropTypes from 'prop-types';
import { Component } from 'react';
import './App.css';
import CourseList from './CourseList/CourseList';
import Notifications from './Notifications/Notifications';
import Footer from './footer/Footer';
import Header from './header/header';
import Login from './login/Login';
import { getLatestNotification } from './utils';


const listCourses = [
  {
    id: 1, name: 'ES6', credit: 60
  }, {
    id: 2, name: 'Webpack', credit: 20
  }, {
    id: 3, name: 'React', credit: 40
  }]

  const listNotifications = [
    {
      id: 1, type: "default", value: "New course available"
    },
    {
      id: 2, type: "urgent", value: "New resume available"
    },
    {
      id: 3, type: "", html: {__html: getLatestNotification() } 
    }
  ]

class App extends Component {

  render() {

    return (<div>
      
      <div className="App-header">
        <Header/>
        <Notifications listNotifications={listNotifications}/>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {this.props.isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login/>}
      </div>
       <div data-testid="App-footer" className="App-footer">
        <Footer/>
       </div>
      
    </div> )
  };
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
