
  function mix() {

    let div = document.getElementById("container");

    //new leer gamearea
    while (div.firstChild) {
      div.firstChild.remove();
    }

    //how many cards
    let difLevel = 0;
    difLevel = document.querySelector("input[name=level]:checked").value;

    for (let i = 0; i < difLevel; i++) {
      //place of cards
      let borderDiv = document.createElement("div");
      div.appendChild(borderDiv);

      // cards
      let cardDiv = document.createElement("div");
      borderDiv.appendChild(cardDiv);


      // add class to the divs
      cardDiv.className = "cards";
      borderDiv.className = "border";

    }

    //array for cards
    let arrCards = document.getElementsByClassName("cards");

    for (let i = 0; i < arrCards.length; i++) {
      arrCards[i].style.pointerEvents = "auto";
    };

    //colors

    let arrColors = ["blue", "blue", "red", "red", "yellow", "yellow", "green", "green", "pink", "pink", "brown", "brown", "black", "black", "orange", "orange", "purple", "purple", "lightblue", "lightblue", "gray", "gray", "lime", "lime"];
    let count = arrCards.length;
    //as many colors as cards
    let newArrColors = arrColors.splice(0, count);
    //array for random colors
    let arrRandomColors = [];

    //cardscounter to winning
    let sum = 0;
    //random colors
    for (let i = 0; i < count; i++) {
      let b = Math.floor(Math.random() * (newArrColors.length));

      arrRandomColors.push(newArrColors[b]);
      newArrColors.splice(b, 1);
    }


    //array to the visited cards
    let visitedCard = [];

    //random colors to the cards
    for (let i = 0; i < count; i++) {

      arrCards[i].style.backgroundColor = arrRandomColors[i];
      //unvisible cards
      arrCards[i].style.opacity = 0;

      //get visible the cliked card

      arrCards[i].onclick = () => {
        arrCards[i].style.opacity = 100;

        //push the visited cards to the array
        visitedCard.push(arrCards[i]);

        //check, that the visited cards have the same color or not

        //if have, stay visible
        if (visitedCard.length == 2 && visitedCard[0].style.backgroundColor == visitedCard[1].style.backgroundColor && visitedCard[0] != visitedCard[1]) {

          visitedCard[0].style.opacity = 90;
          visitedCard[1].style.opacity = 90;
          visitedCard[0].style.pointerEvents = "none";
          visitedCard[1].style.pointerEvents = "none";
          visitedCard = [];
          sum += 2;

          if (sum === arrCards.length) {
            setTimeout(() => {
              alert("Congratulations! 🎉 ");
            }, 150)
          }
        }

        //if they don't, get unvisible
        else if (visitedCard.length == 2 && visitedCard[0].style.backgroundColor != visitedCard[1].style.backgroundColor || visitedCard[0] == visitedCard[1]) {

          setTimeout(() => {
            visitedCard[0].style.opacity = 0;
            visitedCard[1].style.opacity = 0;
            visitedCard = [];

          }, 300)

        }
      }

    }
  }
