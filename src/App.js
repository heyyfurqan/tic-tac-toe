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
  return <button className = "square">1</button>;
}
