const navHeaderUl = document.querySelector("#header-nav>ul")
const menuPrincipal = [
    "Item1",
    "Item2",
    "item3",
    "item4",
    "item5"
];

const sousMenu1 = [
    "sous Item 1",
    "sous Item 2",
    "sous Item 3"

]
let i = 0;
while (i < menuPrincipal.length) {

    // navHeaderUl.innerHTML += "<li Id='item"+i+"'">"+menuPrincipal[i]+"</li>";
    navHeaderUl.innerHTML += `<li id="item${i}">${menuPrincipal[i]}</li>`;
    i++;
}