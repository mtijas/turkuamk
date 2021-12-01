import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
  return (
    <h1>{props.message}</h1>
  )
}

function HelloList() {
  return (
    //React.Fragment, works from 16.2 onwards
    <>
      <Hello message="Hello 1" />
      <Hello message="Hello 2" />
      <Hello message="Hello 3" />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <HelloList />
  </React.StrictMode>,
  document.getElementById('root')
);

