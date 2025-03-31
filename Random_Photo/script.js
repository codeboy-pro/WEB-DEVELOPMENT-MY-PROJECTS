const image_container_El=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    image_num=10;
addNewImage();
});
function addNewImage(){
    for (let index = 0; index < image_num; index++) {
        const newImgEl=document.createElement("img");
        newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        image_container_El.appendChild(newImgEl);
        
    }
    
    
}