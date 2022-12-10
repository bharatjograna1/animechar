
function SecondTask() {

    const handleOnChange = (luckyNumber) => {

        let string = "";
        // Pyramid = increament
        for (let i = 1; i <= luckyNumber; i++) {    //loop for upper rows
        
            for (let j = 1; j < luckyNumber - i + 1; j++)   //loop to add space in upper row
            string += " ";
        
            for (let k = 1; k <= 2 * i - 1; k+=2)   //loop to add numbers in upper row
            string += k;
        
            for(let l=1;l < i ;l++) //loop to add character in upper row
            string += String.fromCharCode(l + 64);

            string += "\n";
        }

        // Reverse Pyramid = decreament
        for (let i = 1; i <= luckyNumber - 1; i++) { //loop for below rows
        
            for (let j = 1; j < i + 1; j++) //loop to add space in below row
            string += " ";
        
            for (let k = 1; k <= 2 * (luckyNumber - i) - 1; k+=2)   //loop to add numbers in below rows
            string += k;
        
            for(let l = 1; l <= luckyNumber - i - 1; l++)   //loop to add character in below row
            string += String.fromCharCode(l + 64);

            string += "\n";
        }

        console.log(string);
    }

    const handleOnChangeFibonaki = (fibonakiNumber) => {

        let n1 = 0, n2 = 1, nextTerm, data = "";

        for (let i = 1; i <= (fibonakiNumber); i++) {
            data += n1 + ",\t\t";
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        console.log(data);
    }

    return ( 
        <div>
            <h1>Task:-2</h1>
            <div>
                please enter your lucky number : <input onChange={(e)=>handleOnChange(e.target.value)} />
                <br/>
            </div>
            
            <div>
                User input : <input onChange={(e)=>handleOnChangeFibonaki(e.target.value)} />
            </div>

            note:- output will display in console :)
        </div>
     );
}

export default SecondTask;