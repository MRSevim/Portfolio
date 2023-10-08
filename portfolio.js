const aboutBtn=document.querySelector('#about-link');
const projectsBtn=document.querySelector('#projects-link');
const contactBtn=document.querySelector('#contact-link');
const about=document.querySelector('.about');
const projects=document.querySelector('.projects-container');
const contact=document.querySelector('.contact-container');
const toggleBtnCont= document.querySelector('.toggle-button-container');
const toggleBtn= document.querySelector('.toggle-button');
const cssLink =document.querySelector('.light-mode-css-link'); 
const root =document.querySelector(':root')


/*toggle light-mode*/

let lightMode = false 
lightMode = localStorage.getItem('light-mode') === 'true'; 

switchToLightMode = ()=>{   
  root.style.setProperty('--primary-color', '#50af7a');
  root.style.setProperty('--secondary-color', '#7a50af');
  root.style.setProperty('--tertiary-color', '#af7a50');
}

switchToDarkMode = ()=>{   
  root.style.setProperty('--primary-color', '#1a2a32');
  root.style.setProperty('--secondary-color', '#32281a');
  root.style.setProperty('--tertiary-color', '#321c1a');
}

if(lightMode) {
  document.body.style.transition ='0s';
  toggleBtn.style.transition='transform 0s';
  switchToLightMode(),
  toggleBtn.classList.add('switched');
}  



toggleBtnCont.addEventListener('click', ()=>{

  document.body.style.transition ='0.4s'
  toggleBtn.style.transition='transform 0.6s ease-in-out'
  toggleBtn.classList.toggle('switched');

  if (!lightMode){
    switchToLightMode()
    lightMode = true
  }
  else if(lightMode) {
    switchToDarkMode()
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
