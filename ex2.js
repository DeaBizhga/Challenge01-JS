function validatePassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordDiv = document.getElementById('password');
    const messagePara = document.getElementById('message');

    passwordDiv.textContent = "Password: " + passwordInput;
    iswithupper=false; 
    i=0;
    while(i<passwordInput.length){
        character=passwordInput.charAt(i);
        if(!isNaN(character*1)){
            console.log("Do nothing");
        }else{
            if(character==character.toUpperCase()){
                messagePara.textContent="Okey";
                console.log("Set the variable true");
                i=passwordInput.length;
                iswithupper=true;
            }else{
                console.log("do nothing");
            }
        }
       i++;
    }
    if (passwordInput.length < 8) {
        messagePara.textContent = "Error: Password must be at least 8 characters long.";        
    }
     else {
        if(iswithupper){
        messagePara.textContent = "Your password is valid!";
        }else{
            messagePara.textContent = "Your password is not valid!";

        }
    }
}

// Menyre tjeter nga youtube :)

// if (passwordInput.length < 8) {
//     messagePara.textContent = "Error: Password must be at least 8 characters long."
// // } else if (!/\d/.test(passwordInput) || !/[A-Z]/.test(passwordInput)) {
// //     messagePara.textContent = "Error: Password must contain at least one number and one uppercase letter.";
// }
//  else {
//     messagePara.textContent = "Your password is valid!"; 
// }
