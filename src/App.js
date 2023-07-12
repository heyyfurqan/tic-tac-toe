import {useState} from 'react';

export default function Board()
{
  return(
  <>
  <div className="boardRow">
    <Square />
    <Square />
    <Square />
  
  </div>
  
  <div className="boardRow">
    <Square />
    <Square />
    <Square />
  </div>
  
  <div className="boardRow">
    <Square />
    <Square />
    <Square />
  </div>
  </>
  );
}


function Square()
{
  const [value, setValue] = useState(null);
  function buttonClick()
  {
    setValue('X');
  }
  return <button
    className = "square"
    onClick={buttonClick}
    >{value}</button>;
}
