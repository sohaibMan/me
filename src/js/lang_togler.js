
'use strict'
let is_default=true;
const img=document.querySelector(".img--1");
const imgsm=document.querySelector(".img--2");
const download_button=document.querySelector(".download--anchor");
const  download_icon=document.querySelector(".em");
const  text=document.querySelector(".text_downlaod");
const  textoldvalue=text.textContent;//test of manules trudction that will be make my website slower and make 
//a lot of work for the developer and mainting the website (those varibles will be in the stack memory ues objects ,,,,,)






let lang=localStorage.getItem('lang');

const LangTogller=document.querySelector(".lang");//input label
if(lang=='fr')switchtofr();//my website is by default set to english 
    
function switchtofr(){

  localStorage.setItem('lang','fr');
  LangTogller.checked=true;
  img.src=img.src.replace(/eng/g,'fr');
  imgsm.src=imgsm.src.replace(/eng/g,'fr');
  download_button.href=download_button.href.replace(/eng/g,'fr');
  download_icon.classList.add('em-fr');
  download_icon.classList.remove('em-flag-um');
  text.textContent="Telecharger au format pdf"; 
  
  
}
function backtoeng(){
    
    localStorage.setItem('lang','ang');
    img.src=img.src.replace(/fr/g,'eng');
    imgsm.src=imgsm.src.replace(/fr/g,'eng');
    download_button.href=download_button.href.replace(/fr/g,'eng');
  

    download_icon.classList.add('em-flag-um');
    download_icon.classList.remove('em-fr');
    text.textContent=textoldvalue;; 
}


LangTogller.addEventListener('change', ()=>{
    
    is_default=LangTogller.checked;// false=default mood, true=night mood
    if(is_default)switchtofr();
    else backtoeng();

      
})

//making a connection with google trudciton api


//i want my app to interact with the api and the api also to interact with my app