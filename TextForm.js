import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleloClick= ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }

   const handleclearClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
  }

  const handleExtraSpaces = () => {
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText);
};


  const handleSentenceClick = () => {
  let newText = text.toLowerCase();

  // Regex se har sentence ko split karo
  let sentences = newText.match(/[^.!?]+[.!?]*\s*/g);

  if (sentences) {
    sentences = sentences.map(sentence => {
      sentence = sentence.trimStart(); // start space hatao
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });
    setText(sentences.join(''));
  } else {
    setText(newText.charAt(0).toUpperCase() + newText.slice(1));
  }
};


  const handleOnchange = (event)=>{
    //console.log("on change");
    setText(event.target.value )
    }

  const [text, setText] = useState('');
  //text = "new twxt"; //wrong way to change the state 
  //setText = ("new text"); //crrect way to change the state 
  return (
    <>
  <div className="container">
     <h1>{props.heading}</h1> 
     <div className="mb-3">
     <textarea className ="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"> </textarea>
    </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to Sentence Case</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>

  </div>
  <div className="container my-3">
     <h2>your text summary</h2>
     <p>{text.split(" ").length}  words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} 3Minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    
  </div>
  </>
  )
}
