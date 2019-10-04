var listItems = document.getElementById("our-list").getElementsByTagName("li");
var ourHeadline = document.getElementById("our-headline");
var ourButton = document.getElementById("our-button");
var ourList = document.getElementById("our-list");
var newItemCounter = 1;

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem(){
   ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
    ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++;
}