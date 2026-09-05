// Poiesis 0.5 — vrijednost autora + kritika / kontekst za cijeli program
(function(){
  if(typeof events==='undefined' || typeof openEvent==='undefined') return;

  const curation={
    zagreb_hnk:{author:'John Malkovich · redatelj / glumac',tier:'RIJETKA PRILIKA',importance:'Malkovich je globalno prepoznat kao glumac i povremeni kazališni redatelj. Vrijednost ovog prijedloga više je u rijetkosti međunarodnog gostovanja i susretu s velikim imenom nego u činjenici da sustavno oblikuje suvremenu europsku režiju.',verdict:'Vrijedi ako želiš vidjeti međunarodno gostovanje i poznato autorsko ime u Zagrebu.',media:[]},
    ljubljana_berlin:{author:'Khatia Buniatishvili · pijanistica',tier:'VRLO VRIJEDNO',importance:'Buniatishvili je jedna od najprepoznatljivijih koncertnih pijanistica svoje generacije, poznata po izrazito individualnom, fizičkom i teatralnom pristupu izvedbi.',verdict:'Dobar razlog za odlazak u Ljubljanu ako želiš veliku koncertnu večer s jakom izvođačkom osobnošću.',media:[]},
    ljubljana_dresden:{author:'Daniele Gatti + Staatskapelle Dresden',tier:'NE PROPUSTI AKO VOLIŠ MAHLERA',importance:'Gatti pripada vrhu europskog dirigentskog kruga, a Staatskapelle Dresden ima jednu od najdužih orkestralnih tradicija u Europi. Kod Mahlera je upravo orkestralna kultura presudna.',verdict:'Jedna od glazbeno najvrjednijih stvari u trenutnom radijusu Poiesisa.',media:[]},
    vienna_phil:{author:'Wiener Philharmoniker · orkestar',tier:'RIJETKA PRILIKA',importance:'Bečki filharmoničari predstavljaju jednu od središnjih orkestralnih tradicija Europe, a izvedba u Musikvereinu dodatno pojačava vrijednost događaja jer su orkestar i prostor povijesno nerazdvojivi.',verdict:'Vrijedi putovanja zbog kombinacije orkestra, dvorane i rijetkosti iskustva.',media:[]},
    graz_angelic:{author:'Alex Baczyński-Jenkins · koreograf / performer',tier:'POIESIS OTKRIĆE',importance:'Baczyński-Jenkins pripada međunarodnoj suvremenoj koreografskoj i performans sceni u kojoj se tijelo, želja, zajednica i političnost ne razdvajaju.',verdict:'Vrlo zanimljiv izbor ako želiš izaći iz klasične kazališne forme i vidjeti rad koji pripada aktualnom europskom performans kontekstu.',media:[]},
    graz_fourwalls:{author:'Lina Majdalanie + Rabih Mroué · autori / performeri',tier:'VRLO VRIJEDNO',importance:'Majdalanie i Mroué desetljećima razvijaju dokumentarni i autorefleksivni izvedbeni jezik koji povezuje osobnu povijest, politiku, medije i samu prirodu kazališne reprezentacije.',verdict:'Jedan od intelektualno zanimljivijih kazališno-performans prijedloga u programu.',media:[]},
    trieste_leo:{author:'Alberto Boubakar Malanchino + autorski tim',tier:'VRIJEDI OTKRITI',importance:'Ovdje nema smisla graditi preporuku na globalnoj reputaciji autora. Vrijednost je u suvremenoj sceni Il Rossettija i mogućnosti otkrivanja novijeg talijanskog izvedbenog rada.',verdict:'Manje siguran, ali potencijalno vrlo dobar Poiesis izbor za Trst.',media:[]},
    trieste_arcadia:{author:'Suvremeni autorski projekt · Il Rossetti',tier:'IZVAN RADARA',importance:'Ovaj naslov nije u aplikaciji zbog etabliranog imena nego zbog manjeg formata i mogućnosti eksperimentalnijeg scenskog jezika.',verdict:'Pogledati ako želiš riskantniji, manje mainstream izbor.',media:[]},
    venice_film:{author:'La Biennale di Venezia · Cinema',tier:'VELIKI DOGAĐAJ',importance:'Venecijanska Mostra jedan je od ključnih filmskih festivala svijeta. Vrijednost nije u jednom autoru nego u koncentraciji premijera, velikih redateljskih imena i međunarodnog kritičkog fokusa.',verdict:'Vrijedi ako želiš filmski događaj koji istodobno funkcionira kao međunarodni kulturni trenutak.',media:[]},
    venice_pag:{author:'Ruggero Leoncavallo / Teatro La Fenice',tier:'VRIJEDI PUTOVANJA',importance:'Pagliacci je temeljni veristički naslov, a La Fenice je jedna od povijesno najvažnijih opernih kuća Italije.',verdict:'Vrijednost je u spoju kanonskog djela i same institucije La Fenice.',media:[]},
    belgrade_crno:{author:'Oliver Frljić · redatelj',tier:'VRLO VRIJEDNO',importance:'Frljić je jedan od međunarodno najprepoznatljivijih redatelja s prostora bivše Jugoslavije. Njegov teatar sustavno ispituje političku odgovornost, institucije i nelagodu publike.',verdict:'Vrijedno zbog Frljićeva povratka beogradskom teatru i susreta s tekstom Dejana Dukovskog.',media:[{name:'Vreme',summary:'Kritika čita predstavu kao rad o obitelji i društvu zaglavljenima u tranziciji, uz namjernu nelagodu i pogrešne tragove.',url:'https://vreme.com/kultura/o-neprijatnim-istinama/'},{name:'NIN',summary:'NIN premijeru stavlja u kontekst Frljićeva izrazito angažiranog i javno eksponiranog redateljskog rada.',url:'https://www.nin.rs/kultura/vesti/107393/pozorisna-kritika-predstava-crno-zlato'}]},
    belgrade_sumrak:{author:'BDP · repertoarni naslov',tier:'VRIJEDI POGLEDATI',importance:'Ovdje preporuka ne počiva na jednom međunarodno presudnom autoru nego na repertoarnom kontekstu BDP-a i mogućnosti da se naslov uklopi u ozbiljan kazališni vikend u Beogradu.',verdict:'Vrijedi kao dio šireg kazališnog plana, manje kao samostalni razlog za put.',media:[]},
    sarajevo_elektra:{author:'Sofoklo / suvremena postava NPS-a',tier:'KLASIČNI TEKST / NOVI SUSRET',importance:'Elektra je jedan od temeljnih tekstova antičke tragedije. Vrijednost suvremene izvedbe ovisi ponajprije o režijskom čitanju, ali sam materijal ostaje iznimno relevantan za pitanja osvete, obitelji, rituala i političkog poretka.',verdict:'Posebno vrijedno ako te zanima suvremeni odnos prema tragediji.',media:[]},
    sarajevo_gogolj:{author:'Gogoljevski materijal / NPS',tier:'VRIJEDI POGLEDATI',importance:'Gogoljev svijet ostaje jedan od ključnih izvora groteske, birokratskog apsurda i političke satire u europskom teatru.',verdict:'Dobar izbor ako produkcija uspije zadržati grotesku i ne pretvori materijal samo u ilustraciju klasika.',media:[]},

    venice_biennale_art:{author:'Koyo Kouoh · kustosica',tier:'NE PROPUSTI',importance:'Koyo Kouoh bila je jedna od ključnih međunarodnih kustoskih figura svoje generacije, osnivačica RAW Material Company u Dakaru i prva Afrikanka imenovana umjetničkom direktoricom Venecijanskog bijenala. “In Minor Keys” njezin je posthumno dovršeni veliki kustoski projekt.',verdict:'Najveća koncentracija suvremene umjetnosti u našem radijusu. Vrijedi planirati cijeli dan ili više.',media:[{name:'ArtReview',summary:'ArtReview problematizira kako kritički čitati posthumno dovršenu izložbu i kako Kouohin koncept “minor keys” funkcionira nakon njezine smrti.',url:'https://artreview.com/how-will-we-critique-the-2026-venice-biennale-martin-herbert/'}]},
    ljubljana_maja:{author:'Maja Bojanić · vizualna umjetnica',tier:'VRIJEDI OTKRITI',importance:'Poiesis ovdje namjerno daje prostor autorici koja nije globalno kanonizirana. Aktualni rad u +MSUM-u razvija teme odsutnosti, brisanja i odnosa prema onima koji nestaju iz društvenog i arhivskog pogleda.',verdict:'Manje “siguran” izbor od velikih muzejsko-bijenalskih imena, ali upravo zato zanimljiv kao lokalno otkriće.',media:[{name:'+MSUM',summary:'Muzej navodi da se rad nadovezuje na film iz 2025. i metaforom duhova istražuje brisanje, odsutnost i naš odnos prema nestalima.',url:'https://www.mg-lj.si/en/events/'}]},
    ljubljana_archival:{author:'Kustoski i arhivski projekt · +MSUM',tier:'VRLO VRIJEDNO',importance:'Izložba aktivira važne, ali ranjive arhive feminističke umjetnosti i povezuje Archivo Pinto mi Raya, re.act.feminism i Mesto žensk. Vrijednost je prije svega kustoska i historiografska.',verdict:'Jedan od konceptualno najjačih izložbenih prijedloga u Ljubljani, posebno ako te zanima odnos umjetnosti, arhiva i feminističke povijesti.',media:[{name:'+MSUM',summary:'Institucija izložbu opisuje kao suradnički projekt povezivanja i aktiviranja važnih, ali prekarnijih arhiva feminističke umjetnosti.',url:'https://www.mg-lj.si/en/exhibitions/'}]},
    vienna_terminal:{author:'Grupna muzejska izložba · mumok',tier:'VRLO VRIJEDNO',importance:'Vrijednost ovog prijedloga leži u kustoskoj koncepciji i snazi mumoka kao institucije, više nego u jednom autoru. Tema odnosa djela, arhitekture i gledatelja dobro odgovara Poiesisovom interesu za iskustvo prostora.',verdict:'Dobar izbor za jedan ozbiljan muzejski blok u Beču.',media:[]},
    vienna_tolia:{author:'Tolia Astakhishvili · vizualna umjetnica',tier:'VRLO VRIJEDNO',importance:'Astakhishvili je posljednjih godina snažno prisutna u međunarodnom institucionalnom krugu. Njezin rad spaja instalaciju, arhitekturu, pronađene predmete i osjećaj prostora kao živog organizma.',verdict:'Jedan od najsnažnijih aktualnih razloga za odlazak u Beč ako te zanima suvremena instalacija i prostorno iskustvo.',media:[{name:'Frieze',summary:'Frieze njezin venecijanski projekt opisuje kao hipnotičan spoj totalne instalacije i spekulativne arheologije, s iznimnom osjetljivošću prema prostoru.',url:'https://www.frieze.com/article/tolia-astakhishvili-to-love-and-devour-2025-review'},{name:'mumok',summary:'Mumok izložbu postavlja u kontekst autonomije, ovisnosti, mjerila i percepcije prostora.',url:'https://www.mumok.at/en/'}]}
  };

  const radar=[
    ['Frieze','međunarodna suvremena umjetnost','https://www.frieze.com/exhibition-reviews'],
    ['ArtReview','kritika i suvremena umjetnost','https://artreview.com/'],
    ['The Guardian · Stage','kazalište i izvedbene umjetnosti','https://www.theguardian.com/stage'],
    ['Kulturpunkt','Zagreb i nezavisna kultura','https://kulturpunkt.hr/'],
    ['+MSUM / Moderna galerija','Ljubljana · suvremena umjetnost','https://www.mg-lj.si/en/'],
    ['steirischer herbst','Graz · suvremena umjetnost i performance','https://www.steirischerherbst.at/en/']
  ];

  const style=document.createElement('style');
  style.textContent=`
    .curation-box{margin:22px 0;border:1px solid #4f4127;border-radius:17px;padding:16px;background:#0f0d09}
    .curation-tier{display:inline-block;margin:4px 0 12px;padding:6px 9px;border-radius:999px;background:#6f5428;color:#f3eadb;font-size:11px;letter-spacing:.12em}
    .curation-box h3{font-family:Iowan Old Style,Palatino,Georgia,serif;font-size:28px;font-weight:400;margin:6px 0 8px}
    .curation-box p{color:#c9c3bb;line-height:1.5;font-size:14px}
    .media-link{display:block;border-top:1px solid #2c281f;padding:12px 0;text-decoration:none;color:inherit}
    .media-link b{color:#c99a45}.media-link span{display:block;color:#aaa;font-size:13px;line-height:1.45;margin-top:4px}
  `;
  document.head.appendChild(style);

  const originalOpenEvent=openEvent;
  openEvent=function(id){
    originalOpenEvent(id);
    const e=events[id], c=curation[id];
    const detail=document.querySelector('#detailScreen .detail');
    if(!detail) return;
    detail.querySelector('.curation-box')?.remove();
    const box=document.createElement('div'); box.className='curation-box';
    if(c){
      const media=(c.media||[]).map(m=>`<a class="media-link" href="${m.url}" target="_blank" rel="noopener noreferrer"><b>${m.name} · pročitaj original ↗</b><span>${m.summary}</span></a>`).join('');
      box.innerHTML=`<div class="eyebrow">Poiesis procjena</div><div class="curation-tier">${c.tier}</div><h3>${c.author}</h3><p><b>Zašto je autor važan</b><br>${c.importance}</p><p><b>Zašto ovaj događaj</b><br>${c.verdict}</p>${media?`<div style="margin-top:12px"><div class="eyebrow">Kritika / kontekst · sažeto na hrvatskom</div>${media}</div>`:`<div class="meta" style="margin-top:12px">Relevantna neovisna kritika još nije dodana. Preporuka se temelji na autoru, instituciji i programu.</div>`}`;
    }else{
      box.innerHTML=`<div class="eyebrow">Poiesis procjena</div><h3>${e.title}</h3><p>Analiza autorske i kritičke vrijednosti ovog događaja još se priprema. Poiesis neće izmišljati rang ni kritiku dok nema dovoljno pouzdanog konteksta.</p>`;
    }
    const why=detail.querySelector('.why'); if(why) detail.insertBefore(box,why); else detail.appendChild(box);
  };

  // mali javni radar izvora u dnu "Istraži sve"
  const explore=[...document.querySelectorAll('.section')].find(s=>s.querySelector('h2')?.textContent.trim()==='Istraži sve');
  if(explore && !document.getElementById('poiesisRadar')){
    const r=document.createElement('div'); r.id='poiesisRadar'; r.style.marginTop='18px';
    r.innerHTML=`<div class="eyebrow">Poiesis radar</div><div class="sub" style="margin-top:5px">Izvori koje pratimo kao vanjski kritičarski korektiv</div>${radar.map(x=>`<a class="media-link" href="${x[2]}" target="_blank" rel="noopener noreferrer"><b>${x[0]} ↗</b><span>${x[1]}</span></a>`).join('')}`;
    explore.appendChild(r);
  }
})();