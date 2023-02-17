import React from 'react'
import {useState,useEffect} from 'react';
import '../style/style.scss'

export const Wish = (props) => {
  const {userName,DOB}=props.details
   const myArray=DOB.split('-')
    const [dateCollect, setDateCollect] = useState({})

    const getData=()=>{
      const currentYear=new Date()
      const findDate=()=>{
          
       if(Number(myArray[1]) === Number(currentYear.getMonth()+1)){
        if(Number(myArray[2]) > Number(currentYear.getDate())){
        return currentYear.getFullYear()
      }
        else{
          return currentYear.getFullYear()+1
       }
        }
       else if(Number(myArray[1]) > Number(currentYear.getMonth()+1)){
        return currentYear.getFullYear()
       }
        
       else{
        
        return currentYear.getFullYear()+1
       }
      }
      const newYearDate=new Date(`${myArray[1]} ${myArray[2]} ${findDate()} 00:00:00`)
      const currentDate=new Date()
      const diff=newYearDate-currentDate
      const d=Math.floor(diff/1000/60/60/24)
      const h=Math.floor((diff/1000/60/60)%24)
      const m=Math.floor((diff/1000/60)%60)
      const s=Math.floor((diff/1000)%60)
      setDateCollect({
        Days:d,
        Hours:h,
        Minutes:m,
        Seconds:s,
      })
  
    }
    useEffect(() => {
      
      const interval=setInterval(()=>{
        getData()
      },1000);
      return ()=> clearInterval(interval)
      }
    )
    return (
      <>
        <div className="Wish">
        <h1> Advance Happy Brithday {userName.charAt(0).toUpperCase()+userName.slice(1)} {} </h1>
          <div className='counter'>
            <div className='box days-box' >
             <h3 className='days'>{dateCollect.Day<10?"0"+dateCollect.Days:dateCollect.Days}</h3>
              <span>Days</span>
            </div>
            <div className='box hours-box' >
              <h3 className='hours'>{dateCollect.Hours<10?'0'+dateCollect.Hours:dateCollect.Hours}</h3>
              <span>Hours</span>
            </div>
            <div className='box minutes-box' >
              <h3 className='minutes'>{dateCollect.Minutes<10?'0'+dateCollect.Minutes:dateCollect.Minutes}</h3>
              <span>Minutes</span>
            </div>
            <div className='box seconds-box' >
              <h3 className='seconds'>{dateCollect.Seconds<10?'0'+dateCollect.Seconds:dateCollect.Seconds}</h3>
              <span>Seconds</span>
            </div>
          
          </div>
        </div>
      </>
    );
}
 export default Wish;