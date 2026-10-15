(() => {
  const views = ['discover','humans','world','fun'];
  let mounted = false;
  function route() {
    const hash = location.hash.slice(1);
    if(hash === 'beginning' || hash === 'evidence' || hash === 'main') return;
    const view = views.includes(hash) ? hash : 'discover';
    document.querySelectorAll('[data-view]').forEach(el => el.hidden = el.dataset.view !== view);
    document.querySelectorAll('[data-nav]').forEach(el => { if(el.dataset.nav === view) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current'); });
    if(view === 'fun' && !mounted && window.FirstHumansFun) { window.FirstHumansFun.mount(document.getElementById('fun-container')); mounted = true; }
    document.title = `First Humans — ${ {discover:'The story of us',humans:'Meet the humans',world:'Their world',fun:'The FUN lab'}[view] }`;
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',route); route();
  const timeData = [
    ['A familiar face, an older beginning.','Fossils from Jebel Irhoud combine relatively modern faces with longer, lower braincases. The discoveries place early Homo sapiens in North Africa about 315,000 years ago.','https://www.eva.mpg.de/de/press/news/2017/2017-06-07-the-first-of-our-kind/'],
    ['A clue, written in volcanic ash.','Ash above the Omo I fossils provides a minimum age of about 233,000 years, with uncertainty of around 22,000 years. The fossils must be older than the ash that covered them.','https://www.nature.com/articles/s41586-021-04275-8'],
    ['Life at the edge of a lake.','At Herto, about 160,000 years ago, people lived near a shallow freshwater lake. Hippos, crocodiles and catfish were part of the world around them.','https://newsarchive.berkeley.edu/news/media/releases/2003/06/11_bones-background.shtml']
  ];
  function setTime(i, focus=false) {
    document.querySelectorAll('[data-time]').forEach(b=>{b.setAttribute('aria-selected',String(+b.dataset.time===i));b.tabIndex=+b.dataset.time===i?0:-1;if(focus&&+b.dataset.time===i)b.focus();});
    document.getElementById('time-title').textContent=timeData[i][0];document.getElementById('time-description').textContent=timeData[i][1];document.getElementById('time-source').href=timeData[i][2];document.querySelector('.timeline-number').textContent=`0${i+1}`;document.getElementById('timeline-content').setAttribute('aria-labelledby',`time-${i}`);
  }
  document.querySelectorAll('[data-time]').forEach(b=>{b.addEventListener('click',()=>setTime(+b.dataset.time));b.addEventListener('keydown',e=>{let i=+b.dataset.time;if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();i=e.key==='Home'?0:e.key==='End'?2:(i+(e.key==='ArrowRight'?1:2))%3;setTime(i,true);}});});
  const traits = {
    face:['01 / THE FACE','Closer to us than you might think.','At Jebel Irhoud, the face was tucked beneath the braincase with delicate cheekbones. Stronger brows and larger teeth accompanied this relatively modern facial shape.','https://www.nhm.ac.uk/discover/news/2017/june/oldest-known-homo-sapiens-fossils-discovered-in-morocco.html','◎'],
    skull:['02 / THE SKULL','A mosaic, changing through time.','The Jebel Irhoud fossils had elongated, lower braincases. Their combination of relatively modern faces and more ancient skull shapes shows that our features evolved at different rates.','https://www.eva.mpg.de/de/press/news/2017/2017-06-07-the-first-of-our-kind/','◌'],
    body:['03 / THE BODY','Human bodies. Human variation.','Early Homo sapiens walked upright. A generic first person has no recoverable exact height or build: body proportions and soft tissues varied, just as people vary today.','https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens','↟']
  };
  document.querySelectorAll('[data-trait]').forEach(b=>b.addEventListener('click',()=>{const d=traits[b.dataset.trait];document.querySelectorAll('[data-trait]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));['trait-tag','trait-title','trait-copy'].forEach((id,i)=>document.getElementById(id).textContent=d[i]);document.getElementById('trait-source').href=d[3];document.getElementById('trait-icon').textContent=d[4];}));
  const places = [
    ['01 / MOROCCO','Jebel Irhoud','≈315,000 YEARS AGO','A North African cave site preserved early Homo sapiens alongside stone tools and animal bones. Their faces look surprisingly familiar, while their braincases are longer and lower.','Our early history extends across Africa, far beyond a single birthplace.',timeData[0][2]],
    ['02 / ETHIOPIA','Omo Kibish','AT LEAST ≈230,000 YEARS AGO','In the Lower Omo Valley, layers of volcanic ash above the Omo I fossils help scientists establish their minimum age. A 2022 study revised this key point in our timeline.','Volcanic eruptions can leave a clock in the geological record.',timeData[1][2]],
    ['03 / ETHIOPIA','Herto','≈160,000 YEARS AGO','People at Herto lived beside a shallow freshwater lake, sharing the landscape with hippos, crocodiles and catfish. Animal remains and stone tools give glimpses of that world.','Fossils of animals help reconstruct the environments people inhabited.',timeData[2][2]]
  ];
  function setPlace(i) {const d=places[i];['place-country','place-name','place-age','place-copy','place-clue'].forEach((id,j)=>document.getElementById(id).textContent=d[j]);document.getElementById('place-source').href=d[5];document.getElementById('landscape').dataset.landscape=i;document.querySelectorAll('[data-place]').forEach(x=>x.setAttribute('aria-pressed',String(+x.dataset.place===i)));}
  document.querySelectorAll('[data-place]').forEach(b=>{b.addEventListener('click',()=>setPlace(+b.dataset.place));if(b.tagName.toLowerCase()==='g')b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setPlace(+b.dataset.place);}});});
  const dialog=document.getElementById('evidence-dialog');document.getElementById('evidence-open').addEventListener('click',e=>{e.preventDefault();dialog.showModal();});document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();
