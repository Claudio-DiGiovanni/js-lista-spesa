const arrGroceryList = [
    "patate",
    "cetrioli",
    "zucchine",
    "cipolle",
    "pomodori",
];

const eleGroceryList = document.querySelector(".grocery-list");

let i = 0;
while (i != arrGroceryList.length) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
}
