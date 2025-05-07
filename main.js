window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.number-inputs input');
    const instructionBox = document.getElementById('instruction');
    const errorBox = document.getElementById('error-message');
    const callSound = document.getElementById('callSound');

    function callHotline() {
        errorBox.classList.add('hidden');
        instructionBox.classList.add('hidden');

        let enteredCode = '';
        inputs.forEach(input => enteredCode += input.value);

        const correctCode = "1122334455";

        if (enteredCode === correctCode) {
            instructionBox.classList.remove('hidden');
            callSound.play();
        } else {
            errorBox.classList.remove('hidden');

            // Fehler verschwindet automatisch nach 3 Sekunden
            setTimeout(() => {
                errorBox.classList.add('hidden');
            }, 10000);
        }
    }
  // Button mit Funktion verknüpfen
  document.querySelector('.call-button').addEventListener('click', callHotline);

  // Automatisches Springen der Eingabefelder
  inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
          if (input.value.length === 1 && index < inputs.length - 1) {
              inputs[index + 1].focus();
          }
      });

      input.addEventListener('keydown', (e) => {
          if (e.key === "Backspace" && input.value === '' && index > 0) {
              inputs[index - 1].focus();
          }
      });
  });
});