const even = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const evenText = (num) => {
  let text = "";
  if (even(num)) {
    text = "even";
  } else {
    text = "odd";
  }
  return text;
}

const evenAlert = "An even number is a number which has a remainder of 0 upon division by 2, while an odd number is a number which has a remainder of 1 upon division by 2.";

const prime = (num) => {
  let sum = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum++;
    }
  }
  if (sum > 0) {
    return false
  } else {
    return true;
  }
}

const primeText = (num) => {
  let text = "";
  if (prime(num)) {
    text = "prime";
  } else {
    text = "composite";
  }
  return text;
}

const primeAlert = "A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number.";

const emirp = (num) => {
  let num2 = num.toString();
  let num3 = "";
  for (let i = num2.length - 1; i >= 0; i--) {
    num3 += num2[i];
  }

  if (prime(num) && prime(Number(num3))) {
    return true;
  } else {
    return false;
  }
}

const emirpText = (num) => {
  let num2 = num.toString();
  let num3 = "";
  for (let i = num2.length - 1; i >= 0; i--) {
    num3 += num2[i];
  }
  let text = "";
  if(num === Number(num3) && emirp(num)){
     text = num + " is palindromic prime."
  } else if (emirp(num)) {
    text = num + " and " + num3 + " are primes, so " + num + " is emirp";
  } else {
    text = "not emirp";
  }
  return text;
}

const emirpAlert = "An emirp (prime spelled backwards) is a prime number that results in a different prime when its decimal digits are reversed.";

const harshad = (num) => {
  let num2 = num.toString();
  let num3 = 0;
  for (let i = 0; i < num2.length; i++) {
    num3 += Number(num2[i]);
  }

  if (num % num3 === 0) {
    return true;
  } else {
    return false;
  }
}

const harshadText = (num) => {
  let num2 = num.toString();
  let num3 = 0;
  let text = "";
  for (let i = 0; i < num2.length; i++) {
    num3 += Number(num2[i]);
    if (harshad(num)) {
      text = num + " / " + num3 + " = " + num / num3 + "<br>" + num + " is harshad."
    } else {
      text = "not harshad";
    }
  }
  return text;
}

const harshadAlert = "A harshad number (or Niven number) is an integer that is divisible by the sum of its digits.";

const gapful = (num) => {
  let num2 = num.toString();
  let num3 = num2[0] + num2[num2.length - 1];
  if (num % num3 === 0) {
    return true;
  } else {
    return false;
  }
}

const gapfulText = (num) => {
  let num2 = num.toString();
  let num3 = num2[0] + num2[num2.length - 1];
  let text = "";
  if (gapful(num)) {
    text = num + " / " + num3 + " = " + num / num3 + " " + "<br>" + num + " is gapful";
  } else {
    text = "not gapful";
  }
  return text;
}

const gapfulAlert = "A gapful number is a number of at least 3 digits that is divisible by the number formed by the first and last digit of the original number. For example: 192 is gapful because it is divisible 12. 210 is not gapful because it is not divisible by 20.";

const disarium = (num) => {
  let num2 = num.toString();
  let num3 = 0;
  for (let i = 0; i < num2.length; i++) {
    num3 += Math.pow(Number(num2[i]), i + 1);
    if (num === num3) {
      return true;
    } else {
      return false
    }
  }
}

const disariumText = (num) => {
  let text = "";
  let text2 = "";
  let num2 = num.toString();
  let num3 = 0;
  for (let i = 0; i < num2.length; i++) {
    num3 += Math.pow(Number(num2[i]), i + 1);
    if (i < num2.length - 1) {
      text += num2[i] + "^" + Number(i + 1) + "+";
    } else {
      text += num2[i] + "^" + Number(i + 1);
    }
  }
  if (num === num3) {
    text2 = num + " = " + text + "<br>" + num + " is disarium.";
  } else {
    text2 = " not disarium.";
  }
  return text2;
}

const disariumAlert = "A number is called disarium if sum of its digits, powered with their respective position, is equal to the original number. For example: 1^1+ 3^2+ 5^3= 1 + 9 + 125 = 135.";


const calc = () => {

  let num1 = Number(document.getElementById("num").value);

  if (num1 < 101) {
    alert("This number is not greater, than 100, give another number!");
  } else {

    document.getElementById("myNumber").innerHTML = num1;

    even(num1);
    document.getElementById("evenText").addEventListener("click", event => {
      alert(evenAlert);
    })
    document.getElementById("evenText").innerHTML = evenText(num1);

    prime(num1);
    document.getElementById("primeText").addEventListener("click", event => {
      alert(primeAlert);
    })
    document.getElementById("primeText").innerHTML = primeText(num1);

    emirp(num1);
    document.getElementById("emirpText").addEventListener("click", event => {
      alert(emirpAlert);
    })
    document.getElementById("emirpText").innerHTML = emirpText(num1);

    harshad(num1);
    document.getElementById("harshadText").addEventListener("click", event => {
      alert(harshadAlert);
    })
    document.getElementById("harshadText").innerHTML = harshadText(num1);

    gapful(num1);
    document.getElementById("gapfulText").addEventListener("click", event => {
      alert(gapfulAlert);
    })
    document.getElementById("gapfulText").innerHTML = gapfulText(num1);

    disarium(num1);
    document.getElementById("disariumText").addEventListener("click", event => {
      alert(disariumAlert);
    })
    document.getElementById("disariumText").innerHTML = disariumText(num1);
  }
}
