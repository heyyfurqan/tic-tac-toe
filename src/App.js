export default function Board()
{
  return(
  <>
  <div className="boardRow">
    <Square value="1" />
    <Square value="2" />
    <Square value="3" />
  
  </div>
  
  <div className="boardRow">
    <Square value="4" />
    <Square value="5" />
    <Square value="6" />
  </div>
  
  <div className="boardRow">
    <Square value="7" />
    <Square value="8" />
    <Square value="9" />
  </div>
  </>
  );
}

import {useState} from 'react';

function Square({value})
{
  function buttonClick()
  {
    console.log('clicked!')
  }
  return <button
    className = "square"
    onClick={buttonClick}
    >{value}</button>;
}
