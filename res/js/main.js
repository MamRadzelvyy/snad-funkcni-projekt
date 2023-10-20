const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoUpgrade = document.getElementById("autoUpgrade");

let numberOfCookies = 0;
let CookieIcreaseNumber = 1;
let autoClickerIcreasNumber = 0;
let autoUpgradeInterval;
let clickUpgradePrice = 50;
//arrow funkce () =>
//scope {}
cookie.onclick = () => {
  //zvednout číslo o jedna
  //numberOfCookies = numberOfCookies + 1
  //numberOfCookies=+; přičtu x
  //numberOfCookies++; přičtu jen o jedna
  numberOfCookies += CookieIcreaseNumber;
  counter.innerHTML = "Coins:" + numberOfCookies;
  //zobrazit v odstavci
};

clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    // odečíst cenu nakupu
    numberOfCookies -= clickUpgradePrice;
    counter.innerHTML = "Coins:" + numberOfCookies;
    //zvednout  klikání o jedna
    CookieIcreaseNumber++;
    clickUpgradePrice *= 2;
    clickUpgrade.innerHTML = `Coins: ${numberOfCookies}`;

  }
};
autoUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    numberOfCookies -= 100;
    counter.innerHTML = "Coins:" + numberOfCookies;
    autoClickerIcreasNumber++;
    //zastavíse běžící iterval
    clearInterval(autoUpgradeInterval);
    // 1000 se rovná jedné vteřine (1s)
    setInterval(() => {
      numberOfCookies += autoClickerIcreasNumber;
      counter.innerHTML = "Coins:" + numberOfCookies;
    }, 1000);
  }
};
