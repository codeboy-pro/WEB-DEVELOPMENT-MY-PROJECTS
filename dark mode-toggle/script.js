const inputEl=document.
querySelector(".input");
const bodyEl=document.querySelector("body");
// console.log(inputEl.checked);
inputEl.checked=JSON.parse(localStorage.
getItem("mode"));
update();

function update(){
    if(inputEl.checked){
        bodyEl.style.background="black";
    }
    else{
        bodyEl.style.background="white";
    }

}

inputEl.addEventListener("input",()=>{
    update();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode",
        JSON.stringify(inputEl.checked)
    );
}