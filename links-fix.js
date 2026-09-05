// iPhone/PWA external-link fix for Istraži / kulturne putanje
(function(){
  function safeHref(url){return typeof url==='string' && /^https?:\/\//i.test(url) ? url : '#';}

  externalLink=function(url){
    if(!url) return;
    // Fallback for buttons elsewhere in the app: navigate directly if a popup is blocked.
    const a=document.createElement('a');
    a.href=url;
    a.target='_blank';
    a.rel='noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  journeyStop=function(id,index,centerId){
    const e=events[id];
    const label=id===centerId?'Glavni događaj':index===0?'Prije / poveži':'Nastavi nit';
    const official=safeHref(e.official);
    const tickets=safeHref(e.tickets);
    return `<div class="stop-card" style="display:block;overflow:hidden">
      <div class="stop-img" style="${e.image?`background-image:url('${e.image}')`:'background:linear-gradient(135deg,#151515,#090909)'};min-height:190px"></div>
      <div class="stop-copy">
        <div class="eyebrow">${label} · ${e.city}</div>
        <h3 class="serif" style="font-size:25px;margin:6px 0">${e.title}</h3>
        <div class="meta">${e.venue}<br>${e.meta}</div>
        <div class="actions" style="margin-top:12px">
          <button class="secondary" onclick="openEvent('${id}')">Detalji u Poiesisu</button>
          ${e.official?`<a class="secondary" href="${official}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;text-align:center;display:flex;align-items:center;justify-content:center">Službena stranica ↗</a>`:''}
          ${e.tickets?`<a class="primary full" href="${tickets}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;text-align:center;display:flex;align-items:center;justify-content:center">Kupi ulaznicu ↗</a>`:''}
        </div>
      </div>
    </div>`;
  };

  // Rebuild the current Istraži screen so links are real <a> elements, which iOS handles reliably.
  if(typeof renderJourney==='function') renderJourney(currentEvent);
})();
