// Creat a new component. This component should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD71tdbPviplyO4OLqFJmg84_2CR7lzuvM';
const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
