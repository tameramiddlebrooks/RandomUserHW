import React from 'react';
import axios from 'axios';

const baseUrl = "https://api.randomuser.me/"

// Also inside rando_user.js write an async function 
// fetchUser that fetches a random user 
// using the above url and returns the response


async function fetchUser() {
    const response = await fetch(baseUrl);

    console.log(response);
}
export default fetchUser;

