// Typing Effect
const words = ["Data Analyst","Python Developer", "AI Enthusiast", "Web Developer"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typingEl = document.querySelector('.typing');
function type() {
  if(i >= words.length) i=0;
  currentWord = words[i];
  typingEl.textContent = isDeleting ? currentWord.substring(0,j--) : currentWord.substring(0,j++);
  if(!isDeleting && j===currentWord.length+1){ isDeleting=true; setTimeout(type,500); }
  else if(isDeleting && j===0){ isDeleting=false; i++; setTimeout(type,300); }
  else { setTimeout(type,150); }
}
type();

// Animate Skill Bars
const skillBars = document.querySelectorAll('.skill-bar span');
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.skill').forEach((skill,index)=>{
    const rect = skill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      skillBars[index].style.width = skillBars[index].dataset.skill;
    }
  });
});

// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Dark Mode Toggle
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleTheme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact Form
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Message Sent Successfully!");
  form.reset();
});

// Particles.js
particlesJS('particles-js', {
  "particles": {
    "number": {"value":80},
    "color":{"value":"#0077ff"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.5},
    "size":{"value":3},
    "line_linked":{"enable":true,"distance":150,"color":"#0077ff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":2}
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{"onhover":{"enable":true,"mode":"repulse"}}
  },
  "retina_detect":true
});
