
const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
const langToggle=document.querySelector('.lang-toggle');
function switchLanguage(){
 const isHindi=document.documentElement.lang==='hi' || document.body.classList.contains('hindi');
 const file=location.pathname.split('/').pop() || 'index.html';
 if(isHindi){ location.href='../'+file; } else { location.href='hi/'+file; }
}
langToggle?.addEventListener('click',switchLanguage);
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>20),{passive:true});
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});
document.addEventListener('click',e=>{if(nav?.classList.contains('open')&&!nav.contains(e.target)&&!menu.contains(e.target)){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
document.querySelectorAll('a[href]').forEach(a=>a.addEventListener('click',()=>{if(a.target!=='_blank') sessionStorage.setItem('gkm-lang',document.body.classList.contains('hindi')?'hi':'en')}));
const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
const targets=document.querySelectorAll('.intro-copy,.intro-video,.phase-inner,.seva-copy,.seva-seal,.facility-grid article,.swami-portrait,.swami-copy,.welfare-card,.location-copy,.map-small,.article-grid,.swami-about-grid,.relation,.ashram-overview-grid,.detail-list>div,.plans-grid,.braj-grid,.rhythm-grid>div,.welfare-detail-grid,.contribution-grid,.bank-grid,.contact-card-large,.map-large,.brochure-card');
targets.forEach((el,i)=>{el.dataset.reveal='';el.style.setProperty('--delay',`${Math.min(i%5,4)*65}ms`)});
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{threshold:.08});targets.forEach(el=>io.observe(el))}else targets.forEach(el=>el.classList.add('is-visible'));
