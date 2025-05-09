const buttonEl=document.querySelectorAll("button");

const input_El=document.getElementById("result");
for(let i=0;i<buttonEl.length;i++){
  buttonEl[i].addEventListener("click",()=>{
  const button_value= buttonEl[i].textContent;

    if(button_value==="C"){
clearResult();

    }else if(button_value==="DEL"){
      clear_one_result();
    
    }else if(button_value==="="){
      calculate_result();
    }
    else{
      append_value(button_value);
    }
  });
function clearResult(){
input_El.value="";
}
function clear_one_result(){
input_El.value=input_El.value.slice(0,-1);
}
function calculate_result(){
input_El.value=eval(input_El.value);
}
function append_value(button_value){
  input_El.value+=button_value;
}
}

