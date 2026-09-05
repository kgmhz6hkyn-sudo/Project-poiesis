const events={
 zagreb_hnk:{city:'Zagreb',title:'Oružje i čovjek',type:'Kazalište · Zagreb',venue:'HNK Zagreb · HNK2EU',meta:'4. 9. · 19:30',pill:'Rijetko gostovanje',image:'https://res.cloudinary.com/dg86xjjts/image/upload/w_1920,f_auto,q_auto/v1782053081/cpdutt0stfhzntiwpnpm',desc:'Gostovanje Narodnog kazališta Ivan Vazov iz Sofije u režiji Johna Malkovicha — međunarodni kazališni događaj u Zagrebu.',official:'https://www.hnk.hr/hr/raspored/hnk2eu/',tickets:'https://www.hnk.hr/hr/raspored/hnk2eu/',reasons:[['Gostovanje','Međunarodni kazališni program dolazi direktno u Zagreb.'],['Režija','John Malkovich susreće Shawov tekst.'],['Poiesis izbor','Događaj koji ima smisla pratiti čak i kad je rasprodan — zbog sličnih budućih gostovanja.']]},
 ljubljana_berlin:{city:'Ljubljana',title:'Berliner Symphoniker · Khatia Buniatishvili',type:'Klasična glazba · Ljubljana',venue:'Ljubljana Festival',meta:'6. 9. · večer',pill:'Vrijedi putovanja',image:'',desc:'Čajkovski i Beethoven uz Khatiju Buniatishvili — jedan od završnih vrhunaca festivalske sezone u Ljubljani.',official:'https://www.ljubljanafestival.si/',tickets:'https://www.ljubljanafestival.si/',reasons:[['Izvođačica','Buniatishvili je pijanistica izrazito scenske, gotovo teatralne prisutnosti.'],['Program','Čajkovski i Beethoven daju snažan, komunikativan koncertni luk.'],['Blizina','Ljubljana je dovoljno blizu za jednodnevni kulturni izlet.']]},
 ljubljana_dresden:{city:'Ljubljana',title:'Staatskapelle Dresden · Daniele Gatti',type:'Klasična glazba · Ljubljana',venue:'Ljubljana Festival',meta:'7. 9. · Mahler 6',pill:'Vrlo blizu tvom ukusu',image:'',desc:'Mahlerova Šesta simfonija u izvedbi Staatskapelle Dresden pod ravnanjem Danielea Gattija.',official:'https://www.ljubljanafestival.si/',tickets:'https://www.ljubljanafestival.si/',reasons:[['Mahler','Velika simfonijska dramaturgija i emocionalni ekstrem.'],['Orkestar','Staatskapelle Dresden pripada velikoj europskoj orkestralnoj tradiciji.'],['Nastavak','Prirodna nit nakon Mahlerove Druge koju već imaš u Mojem tragu.']]},
 vienna_phil:{city:'Beč',title:'Wiener Philharmoniker',type:'Klasična glazba · Beč',venue:'Musikverein · Großer Saal',meta:'13. 9. · 19:30',pill:'Rijetka prilika',image:'',desc:'Bečki filharmoničari u Zlatnoj dvorani Musikvereina — iskustvo u kojem su prostor i zvuk jednako važni.',official:'https://musikverein.at/en/new26/',tickets:'https://musikverein.at/en/new26/',reasons:[['Orkestar','Jedan od ključnih europskih orkestara u svojoj matičnoj dvorani.'],['Prostor','Musikverein je sam po sebi dio iskustva.'],['Putovanje','Dovoljno snažan razlog za večer ili vikend u Beču.']]},
 graz_angelic:{city:'Graz',title:'Angelic Conversations',type:'Performance · Graz',venue:'steirischer herbst · Helmut List Halle',meta:'24. i 25. 9. · 20:30',pill:'Vrlo blizu tvom ukusu',image:'',desc:'Alex Baczyński-Jenkins otvara steirischer herbst plesnim/performance radom u okviru teme Red Flags.',official:'https://www.steirischerherbst.at/en/program/events/',tickets:'https://www.steirischerherbst.at/en/program/events/',reasons:[['Festival','steirischer herbst je jedna od najvažnijih regionalnih točaka suvremene umjetnosti.'],['Tijelo','Performance i koreografija kao politički i intimni jezik.'],['Kontekst','Možeš ga povezati s cijelim vikendom izložbi i performansa.']]},
 graz_fourwalls:{city:'Graz',title:'Four Walls and a Roof',type:'Performance · Graz',venue:'steirischer herbst',meta:'17. 10. · 20:00',pill:'Poiesis preporuka',image:'',desc:'Lina Majdalanie i Rabih Mroué u programu festivala koji ove godine promatra političke i kulturne “red flags”.',official:'https://www.steirischerherbst.at/en/',tickets:'https://www.steirischerherbst.at/en/program/events/',reasons:[['Autori','Mroué i Majdalanie spajaju dokumentarno, političko i izvedbeno.'],['Tema','Rad je blizak interesu za kazalište koje misli o vlastitom mediju.'],['Festival','Vrijedi ga gledati u širem kontekstu steirischer herbsta.']]},
 trieste_leo:{city:'Trst',title:'LEO — L’unica arte è un pugno',type:'Scena contemporanea · Trst',venue:'Il Rossetti · Sala Bartoli',meta:'11. 9.',pill:'Možda te iznenadi',image:'',desc:'Suvremena scena Il Rossettija s Albertom Boubakarom Malanchinom; jedan od prvih rujanskih naslova nove sezone.',official:'https://www.ilrossetti.it/it/stagione/il-cartellone-2026-27',tickets:'https://www.ilrossetti.it/it/stagione/il-cartellone-2026-27',reasons:[['Blizina','Trst je dobar kandidat za spontani kulturni izlet.'],['Suvremena scena','Program izvan velikih institucionalnih naslova.'],['Otkrivanje','Poiesis bi upravo ovakve manje očite izbore trebao izvući na površinu.']]},
 trieste_arcadia:{city:'Trst',title:'Di là dell’Arcadia — uno studio',type:'Scena contemporanea · Trst',venue:'Il Rossetti',meta:'13. 9.',pill:'Izvan radara',image:'',desc:'Studijski suvremeni rad u rujanskom programu Il Rossettija — zanimljiv kao manji, eksperimentalniji izbor.',official:'https://www.ilrossetti.it/it/stagione/il-cartellone-2026-27',tickets:'https://www.ilrossetti.it/it/stagione/il-cartellone-2026-27',reasons:[['Format','Manji format često omogućuje riskantniji scenski jezik.'],['Grad','Može se spojiti s izložbom ili arhitekturom Trsta.'],['Kontrast','Dobar protutežni izbor velikim produkcijama.']]},
 venice_film:{city:'Venecija',title:'83. Mostra del Cinema',type:'Film · Venecija',venue:'Venice Lido',meta:'1.–12. 9.',pill:'Događa se sada',image:'https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2026/1300x450/83miac-logo-ok.jpg?itok=BS57vhYG',desc:'Venecijanski filmski festival traje na Lidu; ovogodišnji program uključuje 21 film u glavnoj konkurenciji i niz velikih autora.',official:'https://www.labiennale.org/en/cinema',tickets:'https://www.labiennale.org/en/cinema',reasons:[['Trenutak','Festival se odvija upravo sada.'],['Autori','Program okuplja međunarodne autore i premijere.'],['Venecija','Može se spojiti s izložbama i drugim umjetničkim sadržajima u gradu.']]},
 venice_pag:{city:'Venecija',title:'Pagliacci',type:'Opera · Venecija',venue:'Teatro La Fenice',meta:'18.–26. 9.',pill:'Vrijedi putovanja',image:'',desc:'Leoncavallovi Pagliacci u rujanskom programu La Fenice, s više izvedbi i izravnom online prodajom.',official:'https://www.teatrolafenice.it/en/',tickets:'https://www.teatrolafenice.it/en/',reasons:[['Opera','Kompaktna, dramatski koncentrirana opera.'],['Mjesto','La Fenice pojačava cijelo iskustvo.'],['Fleksibilnost','Više termina olakšava slaganje kulturnog vikenda.']]},
 belgrade_crno:{city:'Beograd',title:'Crno zlato',type:'Kazalište · Beograd',venue:'Beogradsko dramsko pozorište',meta:'18.–20. 9. · 19:30',pill:'Vrlo blizu tvom ukusu',image:'https://cdn.prod.website-files.com/65113fe76c53533e3fe3f7c0/69b16c3faff27bd96e00f0a1_DSC00820_resized%20-%20Copy.jpg',desc:'Tekst Dejana Dukovskog u režiji Olivera Frljića na velikoj sceni BDP-a.',official:'https://www.bdp.rs/predstave?bdpArena=true',tickets:'https://app.sixtix.com/events/af99401d4a9c',reasons:[['Redatelj','Frljićev rad prirodno ulazi u Poiesisov suvremeni kazališni filter.'],['Tekst','Dukovski donosi regionalni kontekst bez provincijalnog okvira.'],['Termin','Tri uzastopna termina daju dobru mogućnost planiranja.']]},
 belgrade_sumrak:{city:'Beograd',title:'Sumrak bogova',type:'Kazalište · Beograd',venue:'Beogradsko dramsko pozorište',meta:'24.–25. 9. · 20:00',pill:'Poiesis preporuka',image:'https://cdn.prod.website-files.com/65113fe76c53533e3fe3f7c0/651c181f5aa5001b4461cf51_sumrak-bogova.avif',desc:'Rujanski naslov BDP-a na Maloj sceni Pepi, s dostupnom online prodajom ulaznica.',official:'https://www.bdp.rs/repertoar',tickets:'https://app.sixtix.rs/events/270df1186aa3/',reasons:[['Kazalište','Naslov koji vrijedi držati u aktivnom repertoarnom radaru.'],['Beograd','Može biti jezgra večernjeg kulturnog plana.'],['Ulaznice','Direktna online kupnja dostupna je iz aplikacije.']]},
 sarajevo_elektra:{city:'Sarajevo',title:'Elektra',type:'Kazalište · Sarajevo',venue:'Narodno pozorište Sarajevo',meta:'6. 9. · 19:30',pill:'Klasični tekst / novi susret',image:'https://nps.ba/assets/photos/performance/big/1783013824-elektra-2.jpg?v1787410863=',desc:'Elektra u rujanskom repertoaru Narodnog pozorišta Sarajevo.',official:'https://nps.ba/repertoar',tickets:'https://nps.ba/repertoar',reasons:[['Mit','Antički materijal ostaje plodno mjesto za suvremeno kazalište.'],['Repertoar','Dio bogatog rujanskog programa NPS-a.'],['Nit','Može otvoriti vezu prema tragediji, ritualu i tvojim istraživačkim interesima.']]},
 sarajevo_gogolj:{city:'Sarajevo',title:'Gogolj iz pepela',type:'Kazalište · Sarajevo',venue:'Narodno pozorište Sarajevo',meta:'14. i 15. 9. · 19:30',pill:'Vrijedi pogledati',image:'https://nps.ba/assets/photos/slider/big/1783087795-gogolj-iz-pepela.jpg?v1783087812=',desc:'Dvije rujanske izvedbe u Narodnom pozorištu Sarajevo s online kupnjom preko repertoara kazališta.',official:'https://nps.ba/repertoar',tickets:'https://nps.ba/repertoar',reasons:[['Dva termina','Lakše ga je uklopiti u put.'],['Kazališni fokus','Program koji se uklapa u temeljni Poiesisov interes.'],['Sarajevo','Može biti jezgra šireg kulturnog vikenda.']]}
};
const cities=['Svi','Zagreb','Ljubljana','Beč','Graz','Trst','Venecija','Beograd','Sarajevo'];
let currentEvent='graz_angelic', currentCity='Svi';
function card(id){const e=events[id];return `<article class="card" onclick="openEvent('${id}')"><div class="card-img" style="${e.image?`background-image:url('${e.image}')`:'background:linear-gradient(135deg,#151515,#090909)'}"></div><div class="card-body"><div class="eyebrow">${e.type}</div><h3 class="title serif">${e.title}</h3><div class="meta">${e.venue}<br>${e.meta}</div><span class="pill gold">${e.pill}</span><p class="desc">${e.desc}</p></div></article>`}
function renderCities(){document.getElementById('cityFilters').innerHTML=cities.map(c=>`<button class="chip ${c===currentCity?'active':''}" onclick="setCity('${c}')">${c}</button>`).join('')}
function setCity(city){currentCity=city;renderHome()}
function renderHome(){renderCities();let ids=Object.keys(events).filter(id=>currentCity==='Svi'||events[id].city===currentCity);document.getElementById('recommendations').innerHTML=ids.map(card).join('');document.getElementById('feedSubtitle').textContent=currentCity==='Svi'?`${ids.length} odabranih događaja · 8 gradova`:`${ids.length} odabrana događaja · ${currentCity}`}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.getElementById('nav').classList.toggle('hidden',id==='splash'||id==='detailScreen');document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.screen===id));if(id==='trace')renderTrace();window.scrollTo({top:0,behavior:'instant'});}
function openEvent(id){currentEvent=id;const e=events[id];document.getElementById('detailHero').style.backgroundImage=e.image?`url('${e.image}')`:'none';document.getElementById('detailHero').style.background=e.image?'':'linear-gradient(135deg,#151515,#090909)';document.getElementById('detailType').textContent=e.type;document.getElementById('detailTitle').textContent=e.title;document.getElementById('detailVenue').textContent=e.venue;document.getElementById('detailMeta').innerHTML=e.meta.split(' · ').map(x=>`<span>${x}</span>`).join('');document.getElementById('detailPill').textContent=e.pill;document.getElementById('detailDesc').textContent=e.desc;document.getElementById('reasons').innerHTML=e.reasons.map(r=>`<div class="reason"><div style="color:var(--gold)">✦</div><div><b>${r[0]}</b><span>${r[1]}</span></div></div>`).join('');document.getElementById('ticketBtn').style.display=e.tickets?'block':'none';document.getElementById('reflectBox').classList.add('hidden');showScreen('detailScreen')}
function openOfficial(){const u=events[currentEvent].official;if(u)window.open(u,'_blank','noopener')}
function openTickets(){const u=events[currentEvent].tickets;if(u)window.open(u,'_blank','noopener')}
function toast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1800)}
function saveCurrent(){const saved=JSON.parse(localStorage.getItem('saved')||'[]');if(!saved.includes(currentEvent))saved.push(currentEvent);localStorage.setItem('saved',JSON.stringify(saved));toast('Spremljeno')}
function markSeen(){document.getElementById('reflectBox').classList.remove('hidden');document.getElementById('reflectBox').scrollIntoView({behavior:'smooth',block:'center'})}
function saveReflection(){const text=document.getElementById('reflectionText').value.trim();if(!text)return toast('Zapiši barem jednu riječ');let entries=JSON.parse(localStorage.getItem('trace')||'[]');const e=events[currentEvent];entries.unshift({id:Date.now(),title:e.title,venue:e.venue,type:e.type,image:e.image,note:text,date:new Date().toLocaleDateString('hr-HR')});localStorage.setItem('trace',JSON.stringify(entries));document.getElementById('reflectionText').value='';toast('Dodano u Moj trag')}
function saveJourney(){localStorage.setItem('journeySaved','1');toast('Putanja spremljena')}
const demo=[{title:'Mark Rothko',venue:'Firenca',type:'Izložba',image:'',note:'Pred slikom sam prvi put primijetio koliko mi treba tišina.',date:'22. 8. 2026.'},{title:'Jaz, David',venue:'Ljubljana',type:'Kazalište',image:'',note:'Najviše me zanimalo ono što nije izgovoreno.',date:'1. 9. 2026.'},{title:'Mahler: 2. simfonija',venue:'Ljubljana',type:'Koncert',image:'',note:'Na kraju tišina. I onda osjećaj kao da sve počinje ispočetka.',date:'3. 4. 2026.'}];
function renderTrace(){const own=JSON.parse(localStorage.getItem('trace')||'[]');const all=[...own,...demo];document.getElementById('traceEntries').innerHTML=all.map(e=>`<div class="entry"><div class="entry-img" style="${e.image?`background-image:url('${e.image}')`:'background:linear-gradient(135deg,#151515,#090909)'}"></div><div class="entry-copy"><div class="eyebrow">${e.type}</div><h3 class="serif">${e.title}</h3><div class="meta">${e.venue} · ${e.date}</div><div class="note">“${e.note}”</div></div></div>`).join('');document.getElementById('statSeen').textContent=all.length;document.getElementById('statNotes').textContent=all.length}
renderHome();renderTrace();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));

// Poiesis 0.2.1 — dinamičke kulturne putanje s aktivnim poveznicama
const journeyMap={
  Zagreb:['zagreb_hnk','ljubljana_berlin'],
  Ljubljana:['ljubljana_berlin','ljubljana_dresden'],
  'Beč':['vienna_phil','graz_angelic'],
  Graz:['graz_angelic','graz_fourwalls','vienna_phil'],
  Trst:['trieste_leo','trieste_arcadia','venice_pag'],
  Venecija:['venice_film','venice_pag','trieste_leo'],
  Beograd:['belgrade_crno','belgrade_sumrak'],
  Sarajevo:['sarajevo_elektra','sarajevo_gogolj']
};

function externalLink(url){if(url) window.open(url,'_blank','noopener,noreferrer')}

function journeyStop(id,index,centerId){
  const e=events[id];
  const label=id===centerId?'Glavni događaj':index===0?'Prije / poveži':'Nastavi nit';
  return `<div class="stop-card" style="display:block;overflow:hidden">
    <div class="stop-img" style="${e.image?`background-image:url('${e.image}')`:'background:linear-gradient(135deg,#151515,#090909)'};min-height:190px"></div>
    <div class="stop-copy">
      <div class="eyebrow">${label} · ${e.city}</div>
      <h3 class="serif" style="font-size:25px;margin:6px 0">${e.title}</h3>
      <div class="meta">${e.venue}<br>${e.meta}</div>
      <div class="actions" style="margin-top:12px">
        <button class="secondary" onclick="openEvent('${id}')">Detalji u Poiesisu</button>
        <button class="secondary" onclick="externalLink('${e.official||''}')">Službena stranica ↗</button>
        ${e.tickets?`<button class="primary full" onclick="externalLink('${e.tickets}')">Kupi ulaznicu ↗</button>`:''}
      </div>
    </div>
  </div>`;
}

function renderJourney(centerId=currentEvent){
  const center=events[centerId]||events.graz_angelic;
  currentEvent=centerId;
  const ids=(journeyMap[center.city]||[centerId]).filter(id=>events[id]);
  if(!ids.includes(centerId)) ids.unshift(centerId);
  const ordered=[centerId,...ids.filter(id=>id!==centerId)];
  const journey=document.getElementById('journey');
  journey.innerHTML=`
    <button class="icon-btn" onclick="showScreen('home')">‹</button>
    <div class="eyebrow" style="margin-top:18px">Tvoja kulturna putanja</div>
    <h2 class="serif">${center.city}: oko “${center.title}”</h2>
    <p class="lead">Poiesis uz glavni događaj predlaže još nekoliko iskustava. Svaka stanica sada ima izravnu poveznicu na program i, gdje je dostupno, kupnju ulaznica.</p>
    <div class="thread"><b>Moguća nit</b><p>${center.reasons?.[1]?.[1]||'Ovo nije jedino moguće čitanje — samo prijedlog veze između iskustava.'} Poveznice su prijedlog, ne obavezna interpretacija.</p></div>
    <div class="timeline">${ordered.map((id,i)=>journeyStop(id,i,centerId)).join('')}</div>
    <button class="primary" style="width:100%" onclick="saveJourney()">♡ Spremi putanju</button>`;
}

function openJourney(centerId=currentEvent){renderJourney(centerId);showScreen('journey')}

const journeyDetailButton=document.querySelector('#detailScreen .actions .full');
if(journeyDetailButton){journeyDetailButton.onclick=()=>openJourney(currentEvent)}
const journeyBanner=document.querySelector('.journey-banner');
if(journeyBanner){journeyBanner.onclick=()=>openJourney('graz_angelic')}
const journeyNav=document.querySelector('.nav button[data-screen="journey"]');
if(journeyNav){journeyNav.onclick=()=>openJourney(currentEvent)}
renderJourney('graz_angelic');
