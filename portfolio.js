const aboutBtn=document.querySelector('#about-link');
const projectsBtn=document.querySelector('#projects-link');
const contactBtn=document.querySelector('#contact-link');
const about=document.querySelector('.about');
const projects=document.querySelector('.projects-container');
const contact=document.querySelector('.contact-container');
const toggleBtnCont= document.querySelector('.toggle-button-container');
const toggleBtn= document.querySelector('.toggle-button');
const cssLink =document.querySelector('.light-mode-css-link'); 


/*toggle light-mode*/

let lightMode = false 
lightMode = localStorage.getItem('light-mode') === 'true'; 

document.addEventListener('DOMContentLoaded',() =>{
  if(lightMode) {
    cssLink.href = 'lightmode.css';
    toggleBtn.classList.add('switched');
  }  })


toggleBtnCont.addEventListener('click', ()=>{
 
  
  toggleBtn.classList.toggle('switched');
  if (!lightMode){
    cssLink.href = 'lightmode.css'
    lightMode = true
  }
  else if(lightMode) {
    cssLink.href = ''
    lightMode = false
  }

  localStorage.setItem('light-mode', JSON.stringify(lightMode));
})  

/*Navigation-sliders*/
let sliderposition=0;

aboutBtn.addEventListener('click', ()=>{
  switch(sliderposition) {
    case 0:
      slidefromLeft(-100,0,about);
      sliderposition=1
      break;
    case 1:
      sliderposition=1
      break; 
    case 2:
      slidefromLeft(-100,0,about);
      slidefromLeft(-100,0,projects);
      sliderposition=1
      break; 
    case 3:
      slidefromLeft(-100,0,about);
      slidefromLeft(-200,-100,contact);
      sliderposition=1
      break; 
  }
});
projectsBtn.addEventListener('click', ()=>{
  switch(sliderposition) {
    case 0:
      slidefromRight(0,-100,projects);
      sliderposition=2
      break;
    case 1:
      slidefromRight(0,-100,projects);
      slidefromRight(0,-100,about);
      sliderposition=2
      break; 
    case 2:    
    sliderposition=2
      break; 
    case 3:
      slidefromLeft(-200,-100,projects);
      slidefromLeft(-200,-100,contact);
      sliderposition=2
      break; 
  }
})
contactBtn.addEventListener('click', ()=>{
  switch(sliderposition) {
    case 0:
      slidefromRight(-100,-200,contact)
      sliderposition=3
      break;
    case 1:
      slidefromRight(-100,-200,contact)
      slidefromRight(0,-100,about)
      sliderposition=3
      break; 
    case 2:
      slidefromRight(-100,-200,contact);
      slidefromRight(-100,-200,projects);
      sliderposition=3
      break; 
    case 3:
      sliderposition=3
      break; 
  }
})

slidefromLeft=(startPosition,endPosition,element)=>{
  let i =startPosition
  function iTick() {
  setTimeout(()=> {
 
    element.style.transform= `translateX(${i}%)`
    i++
    if(i<=endPosition) {
      iTick()
    }
  },1)
 }
 iTick();
}
slidefromRight=(startPosition,endPosition,element)=>{
  let i =startPosition
  function iTick() {
  setTimeout(()=> {
   
    element.style.transform= `translateX(${i}%)`
    i-=1;
    if(i>=endPosition) {
      iTick()
    }
  },1)
 }
 iTick();
}