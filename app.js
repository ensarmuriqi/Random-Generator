const password = document.getElementById("password")
function generatePassword(){
    let num = "0123456789absdefghijklmnopqrstuvwxyz!@#$%^&*()ABSDEFHGHIJKLMNOPQRSUVWXYZTU";
    let passwordLenght = 15;
    let password =""

    for (let i = 0; i <=passwordLenght; i++){
        let randomNumber = Math.floor(Math.random()* num.length);
        password += num.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById("password").value = password
}

function copyPassword(){
    let copyText = password;
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy")
}