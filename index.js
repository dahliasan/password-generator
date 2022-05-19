


function generatePassword() {
    let passwordLength = document.getElementById("passwordLengthInput").value
    let pass = '';
    let str = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$!';
        
    for (let i = 0; i < passwordLength; i++) {
        var char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    return pass;
}


function generate4Passwords() {
    let passwords = []
    for (var i = 0; i < 4; i++) {
        passwords.push(generatePassword())
    }

    document.getElementById("password1").value = passwords[0]
    document.getElementById("password2").value = passwords[1]
    document.getElementById("password3").value = passwords[2]
    document.getElementById("password4").value = passwords[3]
}




// function copy(id) {
//   /* Get the text field */
//   var copyText = document.getElementById(id);
//   window.getSelection().selectAllChildren(copyText);
//   document.execCommand("copy"); //copy to clipboard
//   /* Alert the copied text */
//   alert("Password copied!");
// }

document.getElementById("password1").onclick = function() {
    this.select();
    document.execCommand('copy');
    alert('copied!');
}

document.getElementById("password2").onclick = function() {
    this.select();
    document.execCommand('copy');
    alert('copied!');
}

document.getElementById("password3").onclick = function() {
    this.select();
    document.execCommand('copy');
    alert('copied!');
}

document.getElementById("password4").onclick = function() {
    this.select();
    document.execCommand('copy');
    alert('copied!');
}
