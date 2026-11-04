const toggle=document.querySelector('.menu-toggle');const menu=document.querySelector('.nav-menu');const links=document.querySelectorAll('.nav-link');const sections=document.querySelectorAll('main section[id]');const reveal=document.querySelectorAll('.reveal');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});
links.forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${e.target.id}`))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>navObserver.observe(s));
const revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});reveal.forEach(el=>revealObserver.observe(el));
document.querySelector('#current-year').textContent=new Date().getFullYear();
