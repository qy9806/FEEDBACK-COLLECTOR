import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
const [text,setText]=useState('')
const [rating,setRating]=useState(10)
const [BtnDisabled,setBtnDisabled]=useState(true)
const [message,setMessage]=useState('')
const handleTextchange =(e)=>{
   if(text===''){
       setBtnDisabled(true)
       setMessage(null)
   }else if(text!==''&&text.trim().length<=10){
       setBtnDisabled(true)
       setMessage('Text must be as least 10 letters!')
   }else{
       setMessage(null)
       setBtnDisabled(false)
   }
    setText(e.target.value)
}
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating,
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

  return (
      <>
    <Card >
        <form onSubmit={handleSubmit}>
            <h2>1.How would you rate our content and web service?</h2>
            <h2>2.Have you experienced any web page Latency?</h2>
            
            <p style={{textAlignVertical: "center",textAlign: "center"}}>*1 is extremely latent 10 is no latent</p>
            <h2>3.How likely you would continue to use our service</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextchange}  type="text" placeholder='write a review' value={text}/>
                <Button type='submit' isDisabled={BtnDisabled}>send</Button>
            </div>
            {message&&<div className='message'>{message}</div>}
        </form>
    </Card>

    </>
  )
}

export default FeedbackForm