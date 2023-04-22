//1. import area
import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUserData } from './actionCreator';
//2. function definition area
function App() {
  //2.1 Hooks area

  // let storeObjectdata =  useSelector((store)=> {return store})
  let dispatch = useDispatch()
  let storeObjectdata =  useSelector(store=> store)

  //2.2 Function def
  //2.3 Return statement

  return (
    <>
      {console.log(storeObjectdata)}
      <button onClick={()=>{dispatch(getUserData())}}>Call My API</button>
      <ul> 
        {
          storeObjectdata && storeObjectdata.map((cv,idx,arr)=>{
            return <li key={idx}>{cv.first_name}</li>
          })
        }
      </ul>
      

    </>
  );
}

export default App;
