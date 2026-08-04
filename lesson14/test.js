console.log(" ma thanh thuy dep trai ");

const elById = document.getElementById("id-1");
console.log("elById:", elById);
elById.style.color = "green";
elById.style.fontSize = "20px";

const elByClass = document.getElementsByClassName("class-1-2");
console.log("elbyClass:", elByClass);
elByClass[0].style.color = "yellow";

const grEls = document.getElementsByClassName("group-class");
console.log("groupele: ", grEls);
grEls[0].style.color = "pink";
grEls[1].style.color = "cyan";
grEls[2].style.color = "gray";
