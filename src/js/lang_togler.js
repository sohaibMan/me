
'use strict'
let is_default=true;
const img=document.querySelector(".img--1");
const imgsm=document.querySelector(".img--2");
const download_button=document.querySelector(".download--anchor");


let lang=localStorage.getItem('lang');

const LangTogller=document.querySelector(".lang");//input label
if(lang=='fr')switchtofr();//my website is by default set to english 
    
function switchtofr(){

  localStorage.setItem('lang','fr');
  LangTogller.checked=true;
  img.src=img.src.replace(/eng/g,'fr');
  imgsm.src=imgsm.src.replace(/eng/g,'fr');
  download_button.href=download_button.href.replace(/eng/g,'fr');
  
}

function backtoeng(){
    
    localStorage.setItem('lang','ang');
    img.src=img.src.replace(/fr/g,'eng');
    imgsm.src=imgsm.src.replace(/fr/g,'eng');
    download_button.href=download_button.href.replace(/fr/g,'eng');

   
}

LangTogller.addEventListener('change', ()=>{
    
    is_default=LangTogller.checked;// false=default mood, true=night mood
    if(is_default)switchtofr();
    else backtoeng();

      
})

//making a connection with google trudciton api


//i want my app to interact with the api and the api also to interact with my app