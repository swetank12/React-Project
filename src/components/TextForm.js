import React, {useState} from 'react'


export default function TextForm(props) {
    //converting the text to upper case
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    //converting the text to lower case
    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    //To clear texts from textarea
    const handleClearClick = () => {
      let newText ="";
      setText(newText);
    }
    //To copy texts from textarea
    const handleCopyClick = () => {
      let newText = {text};

    }
    
    //writing texts in textarea
    const handleOnChange = (event) => {
        console.log("You are writting");
        setText(event.target.value);

    }
    const [text,setText] = useState('Enter text here...');
  //To change text 
  // setText("New text");
    return (
    <>
    <div>
<h1>{props.heading}<hr></hr></h1>
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label" id="formBox"></label> */}
  <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button> &nbsp;
<button className="btn btn-success" onClick={handleLowClick}>Convert to Lowercase</button> &nbsp;
<button className="btn btn-warning" onClick={handleClearClick}>Clear text</button> &nbsp;
<button className="btn btn-danger" onClick={handleCopyClick}>Copy text</button>
    </div>
    <hr />
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length} chracaters</p>
        <p>{0.08 * text.split(" ").length}Minutes Read</p>
        <hr></hr>
        <h3>Preview</h3>
        <hr></hr>
        <p>{text}</p>
    </div>
    </>
  )
}
