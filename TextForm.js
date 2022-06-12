import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // alert("upperCase button was clicked...")
        let newText = text.toUpperCase();
        setText(newText)
      props.showAlert("converted the text to Upper Case","success");
    }
    const handleLowClick = () => {
        // alert("upperCase button was clicked...")
        let newText = text.toLowerCase();
        setText(newText)
      props.showAlert('converted the text to Lower Case','success');

    }
    const handleClearClick = () => {
       
       let newText = " ";
       setText(newText)
      props.showAlert('clear the text','success');

    }
    const handleCopyClick = () => {
    let text = document.getElementById("myBox")
     text.select();
     navigator.clipboard.writeText(text.value)
     document.getSelection().removeAllRanges();
     props.showAlert('Copied text to clipboard','success');
     document.title = "TextUtils-Copied to clipboard";
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert('removed extra spaces','success');
    }
    const handleOnChange = (event) => {
        console.log("onchange function was fired")
        setText(event.target.value)
    }
    const[text, setText] = useState("Enter the text");
    
  return (
      <>
    <div className={`conatiner text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h3> {props.heading}</h3> 
  <div className="mb-3 text-light">
  <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'grey'} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={handleOnChange} value={text} style={{backgroundColor: props.mode === 'light' ? 'light' : 'grey', color: props.mode === 'dark' ? 'light' : 'dark'}} id="myBox" rows="8"></textarea>
  </div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
         <h3>Your text summary</h3>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
         <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
         <h3>Preview</h3>
         <p> {text.length>0 ? text : "Nothing to Preview"} </p>
    </div>
    </>
  )
}
