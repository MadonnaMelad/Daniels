
var typed = new Typed(".auto-type",{
    strings :["Larry Daniels","Developer","Designer"],
    typeSpeed:50,
    backSpeed:40,
    looped:true
})

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

const navEl = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
  if (window.scrollY >= 481.60){
    navEl.classList.add('navbar-scrolled')
  }else if (window.scrollY <481.60 ){
    navEl.classList.remove('navbar-scrolled')

  }
})