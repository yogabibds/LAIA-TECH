// Intersection Observer for reveal-on-scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('active'); io.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Sticky header shadow
const header = document.querySelector('[data-elevate]');
const setHeader = ()=> header.classList.toggle('scrolled', window.scrollY>8);
setHeader(); window.addEventListener('scroll', setHeader);

// Parallax on hero art
const art = document.querySelector('.parallax');
if(art){
  const depth = (parseFloat(art.dataset.depth)||20)/100;
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / window.innerWidth - .5) * 20 * depth;
    const y = (e.clientY / window.innerHeight - .5) * 20 * depth;
    art.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

// Fake form submit
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.'); 
    form.reset();
  });
}
