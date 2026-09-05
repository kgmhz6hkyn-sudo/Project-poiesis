// Poiesis 0.4 — autorska vrijednost + kritika / kontekst
(function(){
  if(typeof events==='undefined' || typeof openEvent==='undefined') return;

  const curation={
    venice_biennale_art:{
      author:'Koyo Kouoh · kustosica',
      tier:'NE PROPUSTI',
      importance:'Koyo Kouoh bila je jedna od ključnih međunarodnih kustoskih figura svoje generacije, osnivačica RAW Material Company u Dakaru i prva Afrikanka imenovana umjetničkom direktoricom Venecijanskog bijenala. “In Minor Keys” njezin je posthumno dovršeni veliki kustoski projekt.',
      verdict:'Najveća koncentracija suvremene umjetnosti u našem radijusu. Vrijedi planirati cijeli dan, a ne samo usputni posjet.',
      media:[
        {name:'Frieze',summary:'Frieze izdvaja snagu izložbe upravo ondje gdje se vidi Kouohin dugogodišnji rad na alternativnim institucijama, slušanju i zajednici.',url:'https://www.frieze.com/article/venice-biennale-2026-review-giardini-central-pavilion'},
        {name:'ArtReview',summary:'ArtReview naglašava posebnost činjenice da je izložba dovršena nakon kustosičine smrti i promatra kako njezin koncept “minor keys” funkcionira u tom kontekstu.',url:'https://artreview.com/how-will-we-critique-the-2026-venice-biennale-martin-herbert/'}
      ]
    },
    vienna_tolia:{
      author:'Tolia Astakhishvili · vizualna umjetnica',
      tier:'VRLO VRIJEDNO',
      importance:'Astakhishvili je posljednjih godina snažno prisutna u međunarodnom institucionalnom krugu: MoMA PS1, Fondation Pernod Ricard i sada prva velika samostalna muzejska izložba u mumoku. Njezin rad spaja instalaciju, arhitekturu, pronađene predmete i osjećaj prostora kao živog organizma.',
      verdict:'Jedan od najsnažnijih aktualnih razloga za odlazak u Beč ako te zanima suvremena instalacija i prostorno iskustvo.',
      media:[
        {name:'Frieze',summary:'Frieze njezin raniji venecijanski projekt opisuje kao hipnotičan spoj totalne instalacije i spekulativne arheologije, s iznimnom osjetljivošću prema prostoru.',url:'https://www.frieze.com/article/tolia-astakhishvili-to-love-and-devour-2025-review'},
        {name:'mumok',summary:'Mumok ovu izložbu postavlja kao njezinu prvu samostalnu muzejsku izložbu i povezuje “figuru djeteta” s autonomijom, ovisnošću, mjerilom i percepcijom prostora.',url:'https://www.mumok.at/en/exhibitions/tolia-astakhishvili'}
      ]
    },
    belgrade_crno:{
      author:'Oliver Frljić · redatelj',
      tier:'VRLO VRIJEDNO',
      importance:'Frljić je jedan od međunarodno najprepoznatljivijih redatelja s prostora bivše Jugoslavije. Njegov teatar sustavno ispituje političku odgovornost, institucionalne mehanizme i odnos publike prema neugodnim društvenim temama.',
      verdict:'Vrijedno zbog susreta Frljićeva političkog kazališta i Dukovskijeva teksta, ali i zato što je riječ o rijetkom Frljićevu povratku radu u Beogradu.',
      media:[
        {name:'Vreme',summary:'Kritika čita predstavu kao rad o obitelji i društvu zaglavljenima u beskrajnoj tranziciji, uz naglašenu nelagodu i namjerne pogrešne tragove.',url:'https://vreme.com/kultura/o-neprijatnim-istinama/'},
        {name:'NIN',summary:'NIN predstavu stavlja u kontekst Frljićeva izrazito angažiranog i javno eksponiranog redateljskog rada te premijeru opisuje kao dugo očekivani događaj.',url:'https://www.nin.rs/kultura/vesti/107393/pozorisna-kritika-predstava-crno-zlato'}
      ]
    },
    graz_angelic:{
      author:'Alex Baczyński-Jenkins · koreograf / performer',
      tier:'POIESIS OTKRIĆE',
      importance:'Baczyński-Jenkins pripada međunarodnoj suvremenoj koreografskoj i performans sceni u kojoj se tijelo, želja, zajednica i političnost ne razdvajaju. Njegov rad ima smisla gledati u kontekstu festivala poput steirischer herbsta, a ne samo kao izolirani plesni naslov.',
      verdict:'Preporuka za gledatelja koji želi suvremeni performance izvan klasične kazališne forme.',
      media:[]
    },
    zagreb_hnk:{
      author:'John Malkovich · redatelj / glumac',
      tier:'RIJETKA PRILIKA',
      importance:'Malkovich je prije svega međunarodno prepoznat kao glumac, ali njegovi kazališni projekti imaju posebnu težinu zbog prijenosa iskustva između velikih angloameričkih produkcijskih sustava i europskih scena.',
      verdict:'Vrijednost je ponajprije u rijetkosti gostovanja i međunarodnom kontekstu, više nego u tome da je riječ o autoru koji sustavno određuje suvremeni europski teatar.',
      media:[]
    },
    ljubljana_maja:{
      author:'Maja Bojanić · vizualna umjetnica',
      tier:'VRIJEDI OTKRITI',
      importance:'Ovdje Poiesis namjerno daje prostor autorici koja nije globalno kanonizirana: važnost prijedloga proizlazi iz aktualnog rada, institucionalnog konteksta +MSUM-a i teme sjećanja, odsutnosti i brisanja.',
      verdict:'Manje “siguran” izbor od velikih muzejsko-bijenalskih imena, ali upravo zato zanimljiv kao otkriće u Ljubljani.',
      media:[]
    }
  };

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

    const box=document.createElement('div');
    box.className='curation-box';
    if(c){
      const media=(c.media||[]).map(m=>`<a class="media-link" href="${m.url}" target="_blank" rel="noopener noreferrer"><b>${m.name} · pročitaj original ↗</b><span>${m.summary}</span></a>`).join('');
      box.innerHTML=`<div class="eyebrow">Poiesis procjena</div><div class="curation-tier">${c.tier}</div><h3>${c.author}</h3><p><b>Zašto je autor važan</b><br>${c.importance}</p><p><b>Zašto ovaj događaj</b><br>${c.verdict}</p>${media?`<div style="margin-top:12px"><div class="eyebrow">Kritika / kontekst · sažeto na hrvatskom</div>${media}</div>`:`<div class="meta" style="margin-top:12px">Relevantna neovisna kritika još nije dodana. Preporuka se zasad temelji na autoru, instituciji i programu.</div>`}`;
    }else{
      box.innerHTML=`<div class="eyebrow">Poiesis procjena</div><h3>${e.title}</h3><p>Analiza autorske i kritičke vrijednosti ovog događaja još se priprema. Poiesis neće izmišljati rang ni kritiku dok nema dovoljno pouzdanog konteksta.</p>`;
    }
    const why=detail.querySelector('.why');
    if(why) detail.insertBefore(box,why); else detail.appendChild(box);
  };
})();