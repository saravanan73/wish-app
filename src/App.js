import Wish from './components/Wish';
import { useState } from 'react';
import Homepage from './components/Homepage';


function App() {
  const initialState={
    userName:'',
    DOB:'',
    state:false
  }
  const [details, setDetails] = useState(initialState)
  const userDetails=(user)=>{
        
        setDetails({...user})
        console.log(details)
       
  }
  if(details.state){
    return <Wish details={details} />
   }return <Homepage userDetails={userDetails} />
  
}

export default App;
