// your JavaScript file
const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p");
redP.style.color="red"
redP.textContent= "Hey I’m red!"

const blueH3 = document.createElement("h3");
blueH3.style.color="blue";
blueH3.textContent= "I’m a blue h3!"

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3);



const newbody = document.querySelector("body");

const newDiv = document.createElement("div");
newDiv.style.border= "2px solid black"

const newH1 = document.createElement("h1");
newH1.textContent="I’m in a div";
newH1.style.color="blue";
newDiv.appendChild(newH1);
const newP = document.createElement("p");
newP.textContent="Me too!";

newDiv.appendChild(newP);

newbody.appendChild(newDiv)



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });
  
  