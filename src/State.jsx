import { useState } from "react";
import btnModeule from './btn.module.css'
import { faqQuestion } from "./Data/faqQuestions";
// import {faq} from './Data/faqQuestion'
function State(){
    let [status, setStatus] = useState(false);
    let [showPass, setShowPass] = useState(false);
    let [showMenu, setShowmenu] = useState(false);
    let [showModal, setShowModal] = useState(false);
    let [faq, setFaq] = useState(faqQuestion[0].id);
    return(
      <>


        {/* faq start */}
        {/* {faqQuestion.map((faqData, i)=>{
            // console.log(faqData.id, faq)
                   return(
                    // <Faq faqData={faqData} />
                    <div className="faq" key={i}>
        <div className="faq-wraper">
            <div onClick={()=>{setFaq(faqData.id)}} className="question">{faqData.question}</div>
            <div className={faq == faqData.id ? 'answerShow' : 'answer'}>{faqData.answer}</div>
        </div>
       
    </div>
                   )
                })} */}

        {/* faq end */}

        {/* modal  */}
      <div onClick={()=>{setShowModal(false)}} className={`overlay ${showModal ? 'showOverlay' : ''}`}></div> 
      <div className={`modalDiv ${showModal ? 'showModal' : ''}`}>
        <h2>Modal <span onClick={()=>{setShowModal(false)}}>&times;</span></h2>
        </div> 
      <button className="enq" onClick={()=>{setShowModal(true)}}>Enquery</button>
       {/* modal end  */}

        {/* menu */}
      <button className="micon" onClick={()=>setShowmenu(!showMenu)}>
        {showMenu ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${showMenu ? 'activemenu' : ''}`}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Gallary</li>
        </ul>
      </div>

      {/* menu end */}


        {/* show hide password */}
      {/* added css from  btnModeule.flexcontainer*/}
      <div className={btnModeule.flexcontainer}>
      <input type={showPass ? 'text' : 'password'} /> 
      <button className={btnModeule.cta} onClick={()=>{setShowPass(!showPass)}}>
        {showPass ? 'Hide' : 'Show'}
      </button>
      </div>

       {/* show hide password end */}

       {/* show hide text */}
      <button className="cta" onClick={()=>setStatus(!status)}>
        {status ? 'Hide' : 'Show'}
      </button>
       { status 
        ?  <h2>Welcome to State.....</h2>
        : ''}
        {/* show hide text end*/}
      </>
    )
}

export default State;

// FAQ one method
// function Faq({faqData}){
//     let [faqqa, setfaqqa] = useState(false);
//     console.log(faqqa)
//     console.log('prop...', faqData.answer)
//     return(
//         <div className="faq">
//         <div className="faq-wraper">
//             <div className="question"  onClick={()=>{setfaqqa(!faqqa)}}>{faqData.question}</div>
//             <div className={`answer ${faqqa ? 'answerShow' : ''}`} >{faqData.answer}</div>
//         </div>
       
//     </div>
//     )
// }

