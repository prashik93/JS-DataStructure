function generateTenRandomThreeDigitNumber() {
    for(let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        console.log("Random Number :- " + randomNumber);
    }
}
generateTenRandomThreeDigitNumber();