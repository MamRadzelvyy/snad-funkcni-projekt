const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;
//arrow funkce () =>
//scope {}
cookie.onclick = () => {
  //zvednout číslo o jedna
  //numberOfCookies = numberOfCookies + 1
  //numberOfCookies=+; přičtu x
  //numberOfCookies++; přičtu jen o jedna
  numberOfCookies++;

  //zobrazit v odstavci
  counter.innerText = "Coins:" + numberOfCookies;
};
