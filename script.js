
let randomNumbers = [];

function GenerateLottery() {
    if (!isNaN(Guess) && Guess != ""){
        for (let i = 0; i < 7; i++) {

            randomNumbers.push(Math.floor(Math.random() * 42) + 1);
            if (randomNumbers.includes(randomNumbers[i] == false)) {
                randomNumbers.push(Math.floor(Math.random() * 42) + 1);
            }
    
    
    
        }
        randomNumbers = document.getElementById("Lottery").textContent = `The winning numbers are: ${randomNumbers}`
    
        if (randomNumbers.includes(Guess)) {
            document.getElementById("Result").textContent = ("YOU WON THE LOTTERY!")
            console.log("win!");
    
        }
        else {
            document.getElementById("Result").textContent = ("You lost this time...")
            console.log("lose!");
    
        }
    
    }
    else{
        document.getElementById("Result").textContent = ("You didnt guess anything!")
    }
    }
    


function submit() {
    Guess = document.getElementById("inputNumber").value;

        if(isNaN(Guess) || Guess == ""){
            document.getElementById("Guess").textContent =  `Invalid guess`
        }

        else if (Guess <= 42) {
            document.getElementById("Guess").textContent = `Your Guess is:  ${Guess} `
        }
        else {
            document.getElementById("Guess").textContent = `${Guess} is out of range!`
        }


}
