// Poiesis 0.3 — aktivni filteri "Istraži sve" + relevantne izložbe
(function(){
  if(typeof events==='undefined' || typeof renderHome==='undefined') return;

  Object.assign(events, {
    venice_biennale_art:{city:'Venecija',title:'Biennale Arte 2026 — In Minor Keys',type:'Izložba · Venecija',venue:'Giardini + Arsenale',meta:'9. 5.–22. 11. 2026',pill:'Ključna izložba',image:'',desc:'61. Međunarodna izložba umjetnosti La Biennale di Venezia, kustoski projekt Koyo Kouoh.',official:'https://www.labiennale.org/en/art/2026/61st-exhibition',tickets:'https://www.labiennale.org/en/tickets',reasons:[['Važnost','Jedan od najvažnijih svjetskih događaja suvremene umjetnosti.'],['Opseg','Giardini, Arsenale i brojni gradski prostori.'],['Poiesis izbor','Vrijedi mu posvetiti cijeli dan ili više.']]},
    ljubljana_maja:{city:'Ljubljana',title:'Maja Bojanić — Anatomy of a Haunting',type:'Izložba · Ljubljana',venue:'+MSUM · Muzej sodobne umetnosti Metelkova',meta:'3. 9.–26. 10. 2026',pill:'Suvremena umjetnost',image:'',desc:'Nova izložba Maje Bojanić istražuje odsutnost, brisanje i metaforu duhova.',official:'https://www.mg-lj.si/en/',tickets:'https://www.mg-lj.si/en/visit',reasons:[['Aktualno','Otvorena je upravo početkom rujna.'],['Tema','Rad se bavi odsutnošću, sjećanjem i načinima gledanja.'],['Blizina','Lako ju je spojiti s kazalištem ili koncertom u Ljubljani.']]},
    ljubljana_archival:{city:'Ljubljana',title:'Archival Chain Reactions',type:'Izložba · Ljubljana',venue:'+MSUM',meta:'do 13. 9. 2026',pill:'Zadnji dani',image:'',desc:'Izložba povezuje i aktivira važne arhive feminističke umjetnosti.',official:'https://www.mg-lj.si/en/exhibitions/',tickets:'https://www.mg-lj.si/en/visit',reasons:[['Arhiv','Suvremena umjetnost kroz feminističke i institucionalne arhive.'],['Vrijeme','Izložba završava uskoro.'],['Kontekst','Dobar kontrapunkt izvedbenim programima u gradu.']]},
    vienna_terminal:{city:'Beč',title:'Terminal Piece',type:'Izložba · Beč',venue:'mumok',meta:'20. 6. 2026–7. 2. 2027',pill:'Velika muzejska izložba',image:'',desc:'Višerazinska izložba mumoka o odnosu umjetničkog djela, prostora i gledatelja.',official:'https://www.mumok.at/en/exhibitions/terminal-piece',tickets:'https://www.mumok.at/en/visit',reasons:[['Muzej','Jedan od ključnih muzeja moderne i suvremene umjetnosti u regiji.'],['Postav','Izložba se proteže kroz više razina muzeja.'],['Autori','Uključuje širok raspon važnih umjetnika 20. i 21. stoljeća.']]},
    vienna_tolia:{city:'Beč',title:'Tolia Astakhishvili — Figure of the Child',type:'Izložba · Beč',venue:'mumok',meta:'20. 6.–1. 11. 2026',pill:'Poiesis preporuka',image:'',desc:'Aktualna samostalna izložba Tolie Astakhishvili u mumoku.',official:'https://www.mumok.at/en/',tickets:'https://www.mumok.at/en/visit',reasons:[['Suvremeno','Jedna od glavnih aktualnih izložbi mumoka.'],['Prostor','Rad snažno koristi arhitekturu i instalaciju.'],['Beč','Vrijedi ju spojiti s Terminal Piece u istom posjetu.']]}
  });

  let activeExplore='Sve';
  const originalRenderHome=renderHome;

  function categoryMatches(e,cat){
    if(cat==='Sve') return true;
    const t=(e.type||'').toLowerCase();
    if(cat==='Kazalište') return t.includes('kazalište')||t.includes('scena');
    if(cat==='Izložbe') return t.includes('izložba')||t.includes('muzej');
    if(cat==='Performance') return t.includes('performance')||t.includes('ples');
    if(cat==='Klasična glazba') return t.includes('klasična glazba')||t.includes('opera');
    if(cat==='Festivali') return t.includes('festival')||t.includes('film');
    return true;
  }

  renderHome=function(){
    renderCities();
    let ids=Object.keys(events).filter(id=>(currentCity==='Svi'||events[id].city===currentCity) && categoryMatches(events[id],activeExplore));
    document.getElementById('recommendations').innerHTML=ids.length?ids.map(card).join(''):'<div class="desc" style="padding:20px 0">Nema odabranih događaja u ovoj kategoriji za taj grad.</div>';
    const label=activeExplore==='Sve'?'odabranih događaja':activeExplore.toLowerCase();
    document.getElementById('feedSubtitle').textContent=currentCity==='Svi'?`${ids.length} ${label} · 8 gradova`:`${ids.length} ${label} · ${currentCity}`;
  };

  const exploreSection=[...document.querySelectorAll('.section')].find(s=>s.querySelector('h2')?.textContent.trim()==='Istraži sve');
  if(exploreSection){
    const chips=[...exploreSection.querySelectorAll('.chip')];
    chips.forEach(chip=>{
      chip.style.cursor='pointer';
      chip.setAttribute('role','button');
      chip.setAttribute('tabindex','0');
      const activate=()=>{
        activeExplore=chip.textContent.trim();
        chips.forEach(c=>c.classList.toggle('active',c===chip));
        renderHome();
        document.getElementById('recommendations')?.scrollIntoView({behavior:'smooth',block:'center'});
      };
      chip.onclick=activate;
      chip.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}};
    });
    const all=document.createElement('span');
    all.className='chip active'; all.textContent='Sve'; all.style.cursor='pointer';
    all.onclick=()=>{activeExplore='Sve';chips.forEach(c=>c.classList.remove('active'));all.classList.add('active');renderHome();document.getElementById('recommendations')?.scrollIntoView({behavior:'smooth',block:'center'});};
    exploreSection.querySelector('.chips')?.prepend(all);
  }

  renderHome();
})();
