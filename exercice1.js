let input = document.getElementById("champ-text");
let buttonSend = document.getElementById("buttonSend");
let tableau = [];
let divContainer = document.getElementById("container");


buttonSend.addEventListener("click", function () {
    let text = input.value;
    tableau.push(text);
    console.log(tableau);
    if (tableau.length === 10) {
        divContainer.innerHTML = tableau[(Math.trunc(Math.random()*10))];
    }

})