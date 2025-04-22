// function Header(props, children){
// let {obj}  = props
//   console.log(obj.name)
import { useState } from 'react';
import './Header.css';
import logo from './logo.svg'
import btnModeule from './btn.module.css'
function Header({obj, username, children}){
  // console.log(obj.colg)
    let [count, setCount] = useState(3)
    let countVar = () =>{
      setCount(count + 1);
    }

    let temp ='';
    let [pshow,setPshow] = useState(false);
    if(pshow){
      temp =  <>
          <button className={btnModeule.cta} onClick={()=>setPshow(!pshow)}>Hide</button>
          <p>Value is True</p>
        </>
    }else{
      temp = 
      <>
        <button className={btnModeule.error} onClick={()=>setPshow(!pshow)}>Show</button>
      </>
    }
    
    return(
        <>
          <img className='logo' src={logo} />
          <h1 className="h1Tag">obj data = {obj.colg}</h1>
          <h1>username = {username}</h1>
          <button className={btnModeule.cta} onClick={countVar}>Count {count}</button>
          <h2 className='abc'>here template value : {temp}</h2>
          {children}
  
        </>
    )
}

export default Header;