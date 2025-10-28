/* Star-field background, fade-in on scroll, mobile nav toggle, back-to-top button */

/* ---------- Star canvas ---------- */
(function starCanvas(){
  const canvas = document.getElementById('stars');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initStars();
  }

  function initStars(){
    stars = [];
    const count = Math.floor((w*h)/6000); // adjusts density by screen size
    for(let i=0;i<count;i++){
      stars.push({
        x: Math.random()*w,
        y: Math.random()*h,
        r: Math.random()*1.3 + 0.3,
        vx: (Math.random()-0.5)*0.1,
        vy: (Math.random()-0.5)*0.1,
        blink: Math.random()*1.2
      });
    }
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'rgba(4,16,38,0.35)';
    ctx.fillRect(0,0,w,h);
    for(const s of stars){
      s.x += s.vx;
      s.y += s.vy;
      s.blink += 0.02;
      if(s.x < 0) s.x = w;
      if(s.x > w) s.x = 0;
      if(s.y < 0) s.y = h;
      if(s.y > h) s.y = 0;

      const a = 0.4 + Math.abs(Math.sin(s.blink))*0.9;
      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r*6);
      grad.addColorStop(0, `rgba(0,255,255,${a})`);
      grad.addColorStop(0.3, `rgba(0,123,255,${a*0.5})`);
      grad.addColorStop(1, `rgba(0,0,0,0)`);
      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(s.x, s.y, s.r*3, 0, Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ---------- Fade-in on scroll ---------- */
(function fadeOnScroll(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();

/* ---------- Mobile nav toggle ---------- */
(function mobileNav(){
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('navToggle');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    nav.classList.toggle('mobile-open');
  });
})();

/* ---------- Back to top ---------- */
(function backToTop(){
  const btns = document.querySelectorAll('#backToTop');
  const btn = btns[0] || null;
  if(!btn) return;
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) btn.style.display = 'block';
    else btn.style.display = 'none';
  });
  btn.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
