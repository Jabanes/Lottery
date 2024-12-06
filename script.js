
let randomNumbers = [];
Valid_Guess = false
function GenerateLottery() {
    if (Valid_Guess == true) {
        for (let i = 0; i < 7; i++) {

            randomNumbers.push(Math.floor(Math.random() * 42) + 1);
            if (randomNumbers.includes(randomNumbers[i] == false)) {
                randomNumbers.push(Math.floor(Math.random() * 42) + 1);
            }



        }
        randomNumbers = document.getElementById("Lottery").textContent = `The winning numbers are: ${randomNumbers}`

        if (randomNumbers.includes(Guess.value)) {
            document.getElementById("Result").textContent = ("YOU WON THE LOTTERY!")
            console.log("win!");

        }
        else {
            document.getElementById("Result").textContent = ("You lost this time...")
            console.log("lose!");

        }

    }
    else {
        document.getElementById("Lottery").textContent = ("I can't reveal without a vaild guess!")
    }
}



function submit() {

    Guess = document.getElementById("inputNumber").value;

    if (Valid_Guess == false) {

        if (isNaN(Guess)) {
            document.getElementById("Guess").textContent = `Invalid guess`
        }

        else if (Guess == "") {
            document.getElementById("Guess").textContent = `You didn't Guess anything!  ${Guess} `
        }


        else if (Guess > 42){
            document.getElementById("Guess").textContent = `${Guess} is out of range!`
        }

        else {

            document.getElementById("Guess").textContent = `Your Guess is:  ${Guess} ` 
            return Valid_Guess = true
    
        }
    }

}





