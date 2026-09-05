const dailyEncounters=[
 {artist:'Marina Abramović',work:'Freeing the Horizon · MoMA',quote:'I needed space. I needed to see new horizons.',image:'https://www.moma.org/d/c/installation_images/W1siZiIsIjE5MTA5MiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=9258f6fbf5e2d11f',source:'https://www.moma.org/audio/playlist/243/3127'},
 {artist:'Pina Bausch',work:'Tanztheater Wuppertal',quote:'I’m not interested in how people move but what moves them.',image:'https://www.tanznetz.de/sites/default/files/images/2020/01/Blaubart_Chr._Pina_Bausch__23.01.2020__Foto_Ursula_Kaufmann_J09A2069.JPG',source:'https://www.pinabausch.org/post/what-moves-me'},
 {artist:'John Cage',work:'Composer · artist',quote:'I can’t understand why people are frightened of new ideas. I’m frightened of the old ones.',image:'https://frequencies.ssrc.org/wp-content/uploads/2011/11/tweed-horizontal1.jpg',source:'https://en.wikiquote.org/wiki/John_Cage'},
 {artist:'Meredith Monk',work:'Composer · performer',quote:'The voice is my river.',image:'https://www.boosey.com/images/composer/MMonk_WhiteCoatHorizontal_JulietaCervantes%20SQ.jpg',source:'https://www.lpm.org/classical/2024-08-13/the-voice-is-my-river-meredith-monk-reflects-on-6-decades-of-music-making'},
 {artist:'Laurie Anderson',work:'Artist · musician · performer',quote:'It is an attempt to describe and to understand.',image:'https://npr.brightspotcdn.com/dims4/default/25128ea/2147483647/strip/true/crop/1800x1200%2B0%2B0/resize/880x587%21/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F4f%2Ff0359da8497cafc1f69c1a699166%2Flaurie-anderson-emilia-album.jpg',source:'https://www.domusweb.it/en/from-the-archive/2024/01/02/laurie-anderson-interview-by-alessandro-mendini-from-the-domus-archive.html'}
];
(function(){
 const hero=document.querySelector('.hero-art'),q=document.querySelector('.quote'),a=document.querySelector('.author'),w=document.querySelector('.work');
 if(!hero||!q||!a||!w)return;
 const last=Number(localStorage.getItem('poiesisDailyLast')||-1);
 let idx=Math.floor(Math.random()*dailyEncounters.length);
 if(dailyEncounters.length>1&&idx===last)idx=(idx+1)%dailyEncounters.length;
 localStorage.setItem('poiesisDailyLast',String(idx));
 const d=dailyEncounters[idx];
 hero.style.backgroundImage=`url('${d.image}')`;
 hero.style.backgroundPosition='center';
 hero.style.backgroundSize='cover';
 q.textContent='“'+d.quote+'”';
 a.textContent=d.artist;
 w.textContent=d.work+' · provjeren citat';
 w.style.cursor='pointer';
 w.onclick=(e)=>{e.stopPropagation();window.open(d.source,'_blank','noopener,noreferrer')};
})();