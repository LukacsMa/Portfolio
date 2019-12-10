const palindromeCheck = () => {
  let originText = document.getElementById("yourText").innerText;
  let text = document.getElementById("yourText").innerText.toLowerCase();
  //Only matter the alphabets and numbers
  let patt = /[a-z,0-9]/g,i
  let matchText = text.match(patt);
  let text2 = "";
  let text3 = "";

  for (let i = matchText.length - 1; i >= 0; i--) {
    text2 += matchText[i];
  }
  for (let j = 0; j < matchText.length; j++) {
    text3 += matchText[j];
  }

  let answer = "";
  text3 === text2 ? answer = `${text2} = ${text3} <br> ${originText} is palindrome.` : answer = `${text2} != ${text3} <br> ${originText} is not palindrome.`;
  document.getElementById("answer").innerHTML = answer;
}
