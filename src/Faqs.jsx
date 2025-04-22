import React, { useState } from 'react'
import { faqQuestion } from './Data/faqQuestions'

export default function Faqs() {
  let [currentId, setCurrentId] = useState(faqQuestion[0].id)
  let items = faqQuestion.map((itemData, i)=>{
    let itemDetails = {
      itemData,
      currentId,
      setCurrentId
    }
      return(
        <FaqItem itemDetails={itemDetails} key={i}/>  
      )
  })

  return (
    <div className='faqBlock'>
        <h2>FAQ</h2>
          {items}
    </div>
  )
}

function FaqItem({itemDetails}){
  let {currentId, itemData, setCurrentId} = itemDetails
  return(
    <div className="faq-wraper">
     <div onClick={()=>{setCurrentId(itemData.id)}} className="question">{itemData.answer}</div>
     <div className={currentId === itemData.id ? 'answerShow' : 'answer'}>{itemData.question}</div>
     </div>
  )
}


