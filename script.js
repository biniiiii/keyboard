const inputField = document.querySelector('input');
const keyboardButtons = document.querySelectorAll('.keyboard button');

keyboardButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === "Backspace") {
            inputField.value = inputField.value.slice(0, -1);
        } else if (buttonText === "Enter") {
            inputField.value += '\n';
        } else if (buttonText === "Space") {
            inputField.value += ' ';
        } else if (buttonText === "Shift" || buttonText === "Alt" || buttonText === "Alt Gr" || buttonText === "Fn" || buttonText === "Ctrl" || buttonText === "CapsLock" || buttonText === "Win") {
            return;
        }else if (buttonText === "Reset") {
            inputField.value = '';
        } 
        else {
            inputField.value += buttonText;
        }
    });
});