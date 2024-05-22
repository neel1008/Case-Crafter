import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState("");

    const upcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowcase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const removespace = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
    }

    const cleartext = () => {
        let newText = "";
        setText(newText);
    }

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div>
                <h3>{props.heading}</h3>
                <div className="mb-3 mx-2 my-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        value={text}
                        onChange={onChange}
                        rows="8"
                    ></textarea>
                    <button className="btn btn-primary mx-2 my-2" onClick={upcase}>Convert to uppercase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={lowcase}>Convert to lowercase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={removespace}>Remove Extra Space</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={cleartext}>Clear Text</button>
                </div>
                <div className="xyz mx-3 my-3">
                    {text && (
                        <p>{text.length} characters and {text.split(" ").length} words</p>
                    )}
                </div>
            </div>
        </>
    );
}
