const caesarCipher = (text, num) => {
  let caesarText = "";

  for (let i = 0; i < text.length; i++) {

    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 && (text.charCodeAt(i) + num) <= 90) {
      caesarText += String.fromCharCode(text.charCodeAt(i) + num);
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 && (text.charCodeAt(i) + num) <= 122) {
      caesarText += String.fromCharCode(text.charCodeAt(i) + num);
    } else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 && (text.charCodeAt(i) + num) > 90) {
      caesarText += String.fromCharCode(text.charCodeAt(i) - 26 + num);
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 && (text.charCodeAt(i) + num) > 122) {
      caesarText += String.fromCharCode(text.charCodeAt(i) - 26 + num);
    } else {
      caesarText += text.charCodeAt(i);
    }
  }
  return caesarText;
}




const ciphCaesar = () => {

  text = document.getElementById("textToCiph").innerText;
  let regex = /[a-zA-Z]/g;
  let testArr = text.match(regex);
  if (!text.match(regex) || testArr.length !== text.length) {
    alert("Your text can contain only letters!");
  } else {

    num = Number(document.getElementById("ciphNumber").value);
    if (num < 1 || num > 25) {
      alert("Give a number between 1 and 25!");
    } else {
      caesarCipher(text, num);
      let cText = caesarCipher(text, num);
      document.getElementById("ciphedText").innerHTML = cText;
    }
  }
}
