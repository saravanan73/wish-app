import React from 'react'
import { useState } from 'react';
import '../style/homePage.scss'

const Homepage = (props) => {
   const initial={
    userName:'',
    DOB:'',
    state:true,
}
    const [getDetails, setgetDetails] = useState(initial)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setgetDetails({...getDetails,[name]:value})
    }
    const toSubmit=(e)=>{
        e.preventDefault()
        console.log(getDetails)
      props.userDetails(getDetails)
        
    }
    return(
        <>
        <div className='Homepage'>
            <form className='form_tag' onSubmit={toSubmit}>
                <h2>Enter your detail</h2>
                <label htmlFor='uname'>Name</label>
                <input type='text' 
                id='uname' 
                className='uname'
                name='userName'
                onChange={handleChange} 
                placeholder='Enter your name'
                value={getDetails.userName}></input>
                
                <label htmlFor='date'>Enter your DOB</label>
                <input type='date' 
                id='date' 
                name='DOB'
                onChange={handleChange}
                className='date'
                value={getDetails.DOB}></input>
                <button type='submit'>submit</button>
                
            </form>
        </div>
        </>
    )
    
}

export default Homepage