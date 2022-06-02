import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was Clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("Lowercase was Clicked" +text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was Clicked" +text);
        let newText='';
        setText(newText);
    }
    const handleCopyClick=()=>{
        var newText=document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleSpaceClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

     const [text, setText] = useState ('');
//   text="new Text" //Wrong way to chang the text
    //  setText("New Text") coorect way to set text; 
            return (
                <>
                
                
                
                <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">                    
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>

                        </textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>

                </div>

                <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2>Your text Summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008* text.split(" ").length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter Something to preview"}</p>
                </div>

                </>
            
                
            );
        }
