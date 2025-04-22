// import React, { useState } from 'react'
// import { TabList } from './Data/tab'

// function Tabs() {
//     let [activeTab, setactiveTab] = useState(0)
//     let [activeConten, setactiveConten] = useState(TabList[0])
//     // console.log(activeConten)

//     let changeTab = (i) =>{
//         // console.log(v)
//         setactiveTab(i);
//         setactiveConten(TabList[i])
//     }
//   return (
//     <div className='TabList'>
//         <ul>
//             {TabList.map((v,i)=>{
//                 console.log(i)
//                 return(
//                     <li key={i}>
//                     <button className={activeTab == i ? 'activeTab' : ''} onClick={()=>changeTab(i)}>{v.tab}</button>
//                 </li>   
//                 )
//             })}
//         </ul>
//         {activeConten !=undefined ?  
//         <p>
//         {activeConten.desk}
//         </p> :
//         ''
//         }
        
//     </div>
//   )
// }

// export default Tabs


import React, { useState } from 'react'
import { TabList } from './Data/tab'
function Tabs() {
    let [tab, setTab] = useState(0)
    let [tabContent, setTabConetnt] = useState(TabList[0])
    console.log(tab, tabContent)
    let changeTab = (i) =>{
        // alert(i)
        setTab(i)
        setTabConetnt(TabList[i])
    }
  return (
    <div className='TabList'>
        <ul>
            {
                TabList.map((value,index)=>{
                    return(
                        <li key={index}>
                            <button onClick={()=>{changeTab(index)}} className={tab === index ? 'activeTab' : '' }>{value.tab}</button>
                        </li>
                    )
                })
            }
        </ul>
        <p>
            {tabContent.desk}
        </p>
    </div>
  )
}

export default Tabs