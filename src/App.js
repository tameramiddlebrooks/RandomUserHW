import React, {useState, useEffect } from 'react';
import FetchUser from './Services/Rando_user';
import UserSummary from './components/UserSummary';

// Write a function refreshUser in the App component
// pass refreshUser to the onClick prop on the button
// For now, just console.log a message inside 
// reFreshUser to make sure it works

/*Back in the App component, import fetchUser, and call 
it within a useEffect hook.
(use fetchUser inside of refreshUser, 
and reFreshUser is inside of useEffect) 
Don't forget to make the inner function an async 
function and await the return value from fetchUser
*/

const RefreshUser = () => {

  const refreshUser = (event, param) => {
    console.log(event);
    console.log(param);

    };
  const fetchUser = () => {}
  const [currentUser, setCurrentUser]=useState([]);

  useEffect (() => {
    const fetchUserData = async() => {
      const response = await fetch("https://api.randomuser.me/")
      const currentUser = await response.json()
      setCurrentUser(currentUser.results);
      console.log(currentUser.results);
    }
    fetchUserData();
  }, [])

  function UserSummary (userData) {
    <return UserSummary userData={currentUser} />

}
  return (
    <div>
    <h1>RANDOM USER APP</h1>
    <button onClick={event => refreshUser
      (event, 'Welcome, user!')}>Refresh User
      
      </button>

    </div>
  )
}

export default RefreshUser;
