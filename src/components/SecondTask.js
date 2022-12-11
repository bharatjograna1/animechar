/**
 * Developer : Bharat Jograna
 * Created : 11 Dec 2022
 * File Comment : patern and fibonaki series component
*/

import React, { useState } from "react";

function SecondTask() {

    //states of component
    const[fibonaki, setFibonaki] = useState("");
    const[pattern, setPattern] = useState("");

    //function to handle onchange of fibonaki series
    const handleOnChangeFibonaki = (fibonakiNumber) => {

        let n1 = 0, n2 = 1, nextTerm, finalSeries = "";

        for (let i = 1; i <= (fibonakiNumber); i++) {       //loop to add next tearms as per user input
            finalSeries += n1 + ",\t\t";
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        setFibonaki(finalSeries)
    }

    //function to handle onchange of pattern
    const handleOnChange = (luckyNumber) => {

        let finalPattern = "";

        // Pyramid = increament
        for (let i = 1; i <= luckyNumber; i++) {    //loop for upper rows
        
            for (let j = 1; j < luckyNumber - i + 1; j++)   //loop to add space in upper row
            finalPattern += " ";
        
            for (let k = 1; k <= 2 * i - 1; k+=2)   //loop to add numbers in upper row
            finalPattern += k;
        
            for(let l=1;l < i ;l++)     //loop to add character in upper row
            finalPattern += String.fromCharCode(l + 64);

            finalPattern += "\n";
        }

        // Reverse Pyramid = decreament
        for (let i = 1; i <= luckyNumber - 1; i++) {    //loop for below rows
        
            for (let j = 1; j < i + 1; j++)     //loop to add space in below row
            finalPattern += " ";
        
            for (let k = 1; k <= 2 * (luckyNumber - i) - 1; k+=2)   //loop to add numbers in below rows
            finalPattern += k;
        
            for(let l = 1; l <= luckyNumber - i - 1; l++)   //loop to add character in below row
            finalPattern += String.fromCharCode(l + 64);

            finalPattern += "\n";
        }

        console.log(finalPattern);
        setPattern(finalPattern)
    }

    return ( 
        <div>
            <hr></hr>
            <h1>Task:-2</h1>
            <div>
                User input : <input onChange={(e)=>handleOnChangeFibonaki(e.target.value)} />
                {" " + fibonaki}
            </div>
            <div>
                please enter your lucky number : <input onChange={(e)=>handleOnChange(e.target.value)} /><br/>
                note:- better output will display in console :)
                {pattern}
            </div>
        </div>
     );
}

export default SecondTask;