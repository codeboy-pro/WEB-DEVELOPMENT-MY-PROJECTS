const  containerEl=document.querySelector(".container");

let careers=["youtuber","content creator","Freelancer","Web developer","Instructor"];
let careersIndex=0;
let characterIndex=0;

updateText();
function updateText() {
    containerEl.innerHTML = `
      <h1>I am ${
        careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
      } ${careers[careersIndex].slice(0, characterIndex)}</h1>
    `;
    characterIndex++;
    if(characterIndex===careers[careersIndex].length+1){
careersIndex++;
characterIndex=0;
    }
    if(careersIndex===careers.length){
careersIndex=0;
    }
    setTimeout(updateText,400);
}

