// Mobile nav toggle — works for multiple pages (different toggle IDs)
function initNav(toggleId, navId){
  const btn = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=> nav.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', ()=>{
  initNav('navToggle','siteNav');
  initNav('navToggle2','siteNav2');
  initNav('navToggle3','siteNav3');
  initNav('navToggle4','siteNav4');

  // simple reveal on scroll
  const reveals = document.querySelectorAll('.card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); })
  },{threshold:0.15});
  reveals.forEach(r=>{ r.classList.add('reveal'); io.observe(r); });

  // contact form validation (client-side only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const out = document.getElementById('formMessage');
      if(!name || !email || !message){
        out.textContent = 'Please fill in all fields.';
        out.style.color = 'crimson';
        return;
      }
      // basic email check
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        out.textContent = 'Please enter a valid email.';
        out.style.color = 'crimson';
        return;
      }
      out.textContent = 'Thanks — your message is ready to be sent (demo).';
      out.style.color = 'green';
      form.reset();
    });
  }

  // Team profile toggle + animate skill bars
  const profiles = document.querySelectorAll('.profile');
  profiles.forEach(profile=>{
    profile.addEventListener('click', ()=>{
      const details = profile.querySelector('.profile-details');
      const expanded = profile.getAttribute('aria-expanded') === 'true';
      profile.setAttribute('aria-expanded', String(!expanded));
      if(details){
        if(expanded){ details.hidden = true; }
        else { details.hidden = false; animateSkillBars(details); }
      }
    });
    profile.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); profile.click(); } });
  });

  function animateSkillBars(container){
    const bars = container.querySelectorAll('.bar');
    bars.forEach(b=>{
      const v = parseInt(b.getAttribute('data-value')||'0',10);
      const span = b.querySelector('span');
      if(span){ setTimeout(()=> span.style.width = v + '%', 60); }
    });
  }

  // Services expand/collapse
  const moreBtns = document.querySelectorAll('.service-card .more');
  moreBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const card = btn.closest('.service-card');
      const details = card.querySelector('.more-details');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(details){ details.hidden = expanded; }
    });
  });
});
