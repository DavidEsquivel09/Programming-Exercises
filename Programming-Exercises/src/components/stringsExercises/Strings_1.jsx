import React from "react";
import { useState } from "react";

const Exercise_Strings_1 = () => {

    const [primaryString, setPrimaryString] = useState(null);
    const [secondaryString, setSecondaryString] = useState(null);
    const [result, setResult] = useState(null);

    function validateSubstring() {

        const primaryStringArray = primaryString.toLowerCase().split('')
        const secondaryStringArray = secondaryString.toLowerCase().split('')
        
        console.log(primaryStringArray)
        console.log(secondaryStringArray)

        for(let a = 0; a < secondaryStringArray.length; a++) {
            for (let b = 0; b < primaryStringArray.length; b++) {
                if (secondaryStringArray[a] === primaryStringArray[b]) {
                    break
                } else if (b === primaryStringArray.length - 1) {
                    return setResult(false)
                }
            }
        }

        setResult(true)
    }

    return (
        <div>
            <h5 class="card-title">Strings</h5>
            <p class="card-text">Given a String X and a String Y, validate if Y is a substring of X.</p>
            <input type="text" placeholder="Type Primary String" onChange={(e) => setPrimaryString(e.target.value)}></input>
            <input type="text" placeholder="Type Secondary String" onChange={(e) => setSecondaryString(e.target.value)}></input>
            <button onClick={() => validateSubstring()}>Submit</button>
            {result !== null && (result === true ?
                (<div style={{background: "#FFF3F3", padding: "10px"}}>
                    The second String is a subString of the first String
                </div>)
                :
                <div style={{background: "#FFF3F3", padding: "10px"}}>
                    The second String is not a subString of the first String
                </div>)
            }
        </div>
    );
}

export default Exercise_Strings_1;