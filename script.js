const arrGroceryList = ["elemento 1", "elemento 2", "elemento 3", "elemento 4"];

const eleGroceryList = document.querySelector(".grocery-list");

let i = 0;
while (i != arrGroceryList.length) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
}

const inputGroceryItem = document.querySelector('input');
const eleGroceryForm = document.querySelector('form');

eleGroceryForm.addEventListener('submit', function(event) {
	event.preventDefault();

	if (inputGroceryItem.value) {
		
		arrGroceryList.push(inputGroceryItem.value);

		
		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

		
		inputGroceryItem.value = '';
	}
});