const btn = document.querySelectorAll('button');

// console.log(btn); >>> gives array of button tag

btn.forEach(button => {
    button.addEventListener("click", () => {

        const buttonText = button.textContent;
        const inputText = document.getElementById("input");

        if(buttonText === '='){
            try { 
                inputText.value = eval(inputText.value);
            }  catch (error) {
                inputText.value = "Error";
            }
        } else if (buttonText === 'RESET') {
            inputText.value = "";
        } else if (buttonText === "DEL") {
            inputText.value = inputText.value.slice(0, -1);
        } else if (buttonText === 'x') {
            inputText.value += '*';
        } else {
            inputText.value += buttonText;
        }
    });
});
