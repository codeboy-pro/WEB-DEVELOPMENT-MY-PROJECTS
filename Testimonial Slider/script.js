const testimonials=[
    {
        name:"Emily Johnson",
        photourl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am extremely impressed with the sleek design and powerful performance of Apple's laptops. The innovative features make it a top choice for anyone looking for reliability and style.",

    },
    {
        name:"Emily Johnson",
        photourl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"The team at koko truly understands the needs of their customers. Their laptops are top-notch, offering a perfect blend of style and performance. I highly recommend koko for anyone in search of quality technology products.",

    },
    {
        name:"Lynn Johnson",
        photourl:"https://images.unsplash.com/photo-1627554785796-f9646d15c2da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfDJ8MHx8fDA%3D",
        text:"I am beyond impressed with Goggle's laptops. The sleek design and top-notch performance exceeded my expectations. Now I can work seamlessly wherever I go. Thank you, Goggle, for enhancing my productivity!",

    },

];

const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");


let idx=0;
update_texti();
function update_texti(){
const {name,photourl,text}=
testimonials[idx];
imgEl.src=photourl;
textEl.innerText=text;
usernameEl.innerText=name;
idx++;
if(idx=== testimonials.length){
    idx=0;
}
setTimeout( ()=>{
    update_texti()
},9000)
}