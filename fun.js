(function () {
  'use strict';
  const looks = [
    ['Everyday', 'modern-wardrobe.png', 0, ['Everyday'], 'A white tee. A good pair of jeans. Some things just feel human.'],
    ['Streetwear', 'modern-wardrobe.png', 1, ['Street'], 'Easy layers, city energy, and a little extra room to move.'],
    ['Tailored', 'modern-wardrobe.png', 2, ['Smart'], 'A sharp suit for a very different kind of gathering.'],
    ['Sport', 'modern-wardrobe.png', 3, ['Adventure'], 'Built to move. Ready for the long run, then and now.'],
    ['Weekend', 'modern-wardrobe.png', 4, ['Everyday'], 'Denim layers and nowhere in particular to be.'],
    ['Evening', 'modern-wardrobe.png', 5, ['Smart'], 'The invitation said dress up. They understood the assignment.'],
    ['Disco Fever', 'looks-funky.png', 0, ['Funky'], 'Ancient roots. Saturday-night energy. Meet the life of the dance floor.'],
    ['Neon Rave', 'looks-funky.png', 1, ['Funky', 'Street'], 'The future looks bright. Very, very bright.'],
    ['Psychedelic', 'looks-funky.png', 2, ['Funky'], 'A kaleidoscope of color for minds that never stopped exploring.'],
    ['Color Pop', 'looks-funky.png', 3, ['Funky', 'Everyday'], 'More color, more possibility. There is no blending in today.'],
    ['Retro Tracksuit', 'looks-funky.png', 4, ['Funky', 'Street'], 'A little throwback. A lot more recent than their usual era.'],
    ['Festival', 'looks-funky.png', 5, ['Funky', 'Adventure'], 'Good company, open skies, and a wardrobe that joins the celebration.'],
    ['Punk Rock', 'looks-expression.png', 0, ['Funky', 'Street'], 'A rebellious streak, turned all the way up.'],
    ['Goth', 'looks-expression.png', 1, ['Funky', 'Street'], 'Dark layers. Quiet confidence. A mood all their own.'],
    ['Preppy', 'looks-expression.png', 2, ['Smart'], 'Campus classics, worn by the original curious minds.'],
    ['Skater', 'looks-expression.png', 3, ['Street'], 'Loose fits, well-worn sneakers, and a new way to get around.'],
    ['Cyberpunk', 'looks-expression.png', 4, ['Funky', 'Street'], 'From the deep past to the neon-lit edge of tomorrow.'],
    ['Avant-Garde', 'looks-expression.png', 5, ['Funky', 'Smart'], 'Unexpected shapes for people who started the whole story.'],
    ['Bohemian', 'looks-adventure.png', 0, ['Adventure', 'Everyday'], 'Earthy textures, easy layers, and a wandering spirit.'],
    ['Safari', 'looks-adventure.png', 1, ['Adventure'], 'Practical pockets and an enduring instinct to explore.'],
    ['Beach Linen', 'looks-adventure.png', 2, ['Adventure', 'Everyday'], 'Light linen, warm air, and a slower pace.'],
    ['Rain Ready', 'looks-adventure.png', 3, ['Adventure'], 'Weather changes. The desire to get outside stays.'],
    ['Alpine', 'looks-adventure.png', 4, ['Adventure'], 'New heights, warm layers, and a whole new view.'],
    ['Utility', 'looks-adventure.png', 5, ['Adventure', 'Street'], 'Made for doing. Every pocket has a purpose.'],
    ['Art Studio', 'looks-lifestyle.png', 0, ['Everyday', 'Funky'], 'A creative impulse, a little mess, and something worth making.'],
    ['Cozy Knit', 'looks-lifestyle.png', 1, ['Everyday'], 'Soft textures for the very human pleasure of staying in.'],
    ['Business Casual', 'looks-lifestyle.png', 2, ['Smart'], 'A meeting at nine. About three hundred millennia to catch up on.'],
    ['Monochrome', 'looks-lifestyle.png', 3, ['Smart', 'Everyday'], 'One palette. Two people. An understated entrance.'],
    ['Cottagecore', 'looks-lifestyle.png', 4, ['Everyday', 'Funky'], 'A soft spot for garden paths, slow mornings, and simple things.'],
    ['Futuristic', 'looks-lifestyle.png', 5, ['Funky'], 'Yesterday’s humans, tomorrow’s wardrobe. The story keeps moving.']
  ].map((look, i) => ({ name: look[0], sheet: look[1], column: look[2], categories: look[3], description: look[4], id: i }));
  const filters = ['All', 'Funky', 'Street', 'Everyday', 'Smart', 'Adventure'];
  const arrow = (direction) => `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${direction === 'left' ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const randomIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h3c4 0 8 12 12 12h3m-4-4 4 4-4 4M3 18h3c1.7 0 3.4-2.2 5.1-5M14 8c1.4-1.3 2.7-2 4-2h3m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const escape = (value) => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const number = value => String(value + 1).padStart(2, '0');
  function pair(look, variant) {
    return `<span class="funlab-pair funlab-pair-${variant}">${['male', 'female'].map(g => `<span class="funlab-person"><span class="funlab-photo" ${variant === 'card' ? 'aria-hidden="true"' : `role="img" aria-label="Artistic concept of an adult early Homo sapiens ${g} in ${escape(look.name)} modern clothing"`} style="background-image:url('./assets/${look.sheet}');background-position:${look.column * 20}% ${g === 'male' ? '0' : '100'}%"></span><span class="funlab-person-label"><span>${g === 'male' ? 'Male' : 'Female'}</span><span aria-hidden="true">${g === 'male' ? '01' : '02'}</span></span></span>`).join('')}</span>`;
  }
  function mount(container) {
    if (!container) return;
    if (container._firstHumansFunCleanup) container._firstHumansFunCleanup();
    const uid = 'funlab-' + Math.random().toString(36).slice(2, 9);
    let featured = 6, activeFilter = 'All', query = '', modalLook = 6, opener = null, previousOverflow = null;
    container.innerHTML = `<section class="funlab" aria-label="First Humans time-travel lookbook">
      <header class="funlab-intro"><div><p class="funlab-eyebrow"><span></span> PLAY / THE FUN LAB</p><h1>300,000 years later.<br> <em>Still a good look.</em></h1></div><div class="funlab-intro-side"><p>Same species. A whole new wardrobe.<br>Meet two imagined early humans in 30 modern looks, from everyday to wonderfully unexpected.</p><button type="button" class="funlab-random" data-action="random">${randomIcon}<span>Find my alter ego</span><span aria-hidden="true">↗</span></button></div></header>
      <div class="funlab-feature" data-feature></div>
      <section class="funlab-collection" aria-labelledby="${uid}-collection"><div class="funlab-collection-heading"><div><p class="funlab-eyebrow">THE COMPLETE COLLECTION</p><h3 id="${uid}-collection">Pick a mood.<br><em>Break the dress code.</em></h3></div><p>Thirty wardrobes. Two familiar faces.<br>A playful leap across time.</p></div>
      <div class="funlab-tools"><div class="funlab-filters" role="group" aria-label="Filter outfit styles">${filters.map(f => `<button type="button" data-filter="${f}" aria-pressed="${f === activeFilter}">${f}</button>`).join('')}</div><div class="funlab-search"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.5"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><label class="funlab-sr-only" for="${uid}-search">Search the lookbook</label><input type="search" id="${uid}-search" data-search placeholder="Find a look…" autocomplete="off" maxlength="80"><button type="button" data-action="clear-search" aria-label="Clear search" hidden>×</button></div></div>
      <div class="funlab-results"><span data-result-count role="status" aria-live="polite"></span><span>SELECT A LOOK TO EXPLORE</span></div><div class="funlab-grid" data-gallery></div></section>
      <div class="funlab-context"><span aria-hidden="true">✳</span><p><strong>A little imagination. A lot of shared humanity.</strong> These adult figures are artistic interpretations of early Homo sapiens. Their appearance and modern outfits are imagined; real people varied, just as we do today.</p><span class="funlab-context-end">THEN. NOW. US.</span></div>
      <dialog class="funlab-dialog" aria-labelledby="${uid}-dialog-title" aria-describedby="${uid}-dialog-desc"></dialog>
    </section>`;
    const feature = container.querySelector('[data-feature]');
    const gallery = container.querySelector('[data-gallery]');
    const resultCount = container.querySelector('[data-result-count]');
    const search = container.querySelector('[data-search]');
    const clearSearch = container.querySelector('[data-action="clear-search"]');
    const dialog = container.querySelector('dialog');
    function renderFeature(keepFocus) {
      const focusAction = keepFocus && container.contains(document.activeElement) ? document.activeElement.dataset.action : null;
      const look = looks[featured];
      feature.innerHTML = `<button type="button" class="funlab-feature-art" data-open="${look.id}" aria-label="View ${escape(look.name)} male and female looks in full size">${pair(look, 'feature')}<span class="funlab-art-hint"><span aria-hidden="true">+</span> A CLOSER LOOK</span></button><div class="funlab-feature-copy"><div class="funlab-feature-top"><span class="funlab-eyebrow">THE TIME-TRAVEL LOOKBOOK</span><span class="funlab-edition">30<br><small>LOOKS</small></span></div><div class="funlab-feature-main"><span class="funlab-mood">${look.categories[0]} / LOOK ${number(look.id)}</span><h3>${look.name}</h3><p>${look.description}</p><button type="button" class="funlab-view" data-open="${look.id}">Explore this look <span aria-hidden="true">↗</span></button></div><div class="funlab-feature-bottom"><div class="funlab-feature-navigation" role="group" aria-label="Browse featured outfits"><button type="button" data-action="feature-prev" aria-label="Previous featured look">${arrow('left')}</button><span aria-live="polite">${number(featured)} <span>/ 30</span></span><button type="button" data-action="feature-next" aria-label="Next featured look">${arrow('right')}</button></div><span>ANCIENT ROOTS.<br>MODERN ENERGY.</span></div></div>`;
      if (focusAction) feature.querySelector(`[data-action="${focusAction}"]`)?.focus({ preventScroll: true });
    }
    function renderGallery() {
      const term = query.trim().toLowerCase();
      const selected = looks.filter(l => (activeFilter === 'All' || l.categories.includes(activeFilter)) && (!term || `${l.name} ${l.categories.join(' ')} ${l.description}`.toLowerCase().includes(term)));
      container.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter)));
      clearSearch.hidden = !query;
      resultCount.textContent = `${String(selected.length).padStart(2,'0')} / 30 LOOKS${activeFilter !== 'All' ? ' · ' + activeFilter.toUpperCase() : ''}${term ? ' · SEARCH RESULTS' : ''}`;
      gallery.innerHTML = selected.length ? selected.map(look => `<article class="funlab-look"><button type="button" class="funlab-look-card" data-open="${look.id}" aria-label="Explore ${escape(look.name)}: male and female ${look.categories[0].toLowerCase()} outfits"><span class="funlab-card-image">${pair(look, 'card')}<span class="funlab-card-expand" aria-hidden="true">↗</span></span><span class="funlab-card-caption"><span class="funlab-card-number">${number(look.id)}</span><span class="funlab-card-title"><strong>${look.name}</strong><span>${look.categories[0]}</span></span><span class="funlab-card-plus" aria-hidden="true">+</span></span></button></article>`).join('') : `<div class="funlab-empty"><span aria-hidden="true">↗</span><h4>A different kind of look?</h4><p>No styles match${term ? ' “' + escape(query.trim()) + '”' : ' this filter'}. Try another search or start fresh.</p><button type="button" data-action="reset-filters">Show all 30 looks ${arrow('right')}</button></div>`;
    }
    function renderModal(keepFocus) {
      const focusedAction = keepFocus && dialog.contains(document.activeElement) ? document.activeElement.dataset.action : null;
      const look = looks[modalLook];
      dialog.innerHTML = `<div class="funlab-dialog-inner"><button type="button" class="funlab-dialog-close" data-action="close" aria-label="Close full-size look">×</button><div class="funlab-dialog-visual">${pair(look, 'dialog')}</div><div class="funlab-dialog-copy"><p class="funlab-eyebrow">FIRST HUMANS / THE FUN LAB</p><span class="funlab-mood">${look.categories[0]} / LOOK ${number(look.id)}</span><h3 id="${uid}-dialog-title">${look.name}</h3><p>${look.description}</p><div class="funlab-dialog-tags">${look.categories.map(c=>`<span>${c}</span>`).join('')}</div><div class="funlab-modal-navigation" role="group" aria-label="Browse all 30 looks"><button type="button" data-action="modal-prev" aria-label="Previous look">${arrow('left')}<span>Previous</span></button><span class="funlab-modal-count" aria-live="polite">${number(modalLook)} / 30</span><button type="button" data-action="modal-next" aria-label="Next look"><span>Next</span>${arrow('right')}</button></div><p class="funlab-dialog-note" id="${uid}-dialog-desc">Imagined adult early Homo sapiens in modern clothing. Artistic concepts, not historical portraits.</p></div></div>`;
      if (focusedAction) dialog.querySelector(`[data-action="${focusedAction}"]`)?.focus({ preventScroll: true });
    }
    function openLook(id, origin) {
      modalLook = id;
      opener = origin;
      renderModal(false);
      if (!dialog.open) {
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
        dialog.querySelector('[data-action="close"]').focus({ preventScroll: true });
      }
    }
    function onClick(event) {
      const button = event.target.closest('button');
      if (!button || !container.contains(button)) return;
      if (button.dataset.open !== undefined) { openLook(Number(button.dataset.open), button); return; }
      if (button.dataset.filter) { activeFilter = button.dataset.filter; renderGallery(); return; }
      switch (button.dataset.action) {
        case 'feature-prev': featured = (featured + looks.length - 1) % looks.length; renderFeature(true); break;
        case 'feature-next': featured = (featured + 1) % looks.length; renderFeature(true); break;
        case 'random': {
          let random = Math.floor(Math.random() * (looks.length - 1));
          if (random >= featured) random++;
          featured = random;
          renderFeature(false);
          openLook(random, button);
          break;
        }
        case 'clear-search': query = ''; search.value = ''; renderGallery(); search.focus({ preventScroll: true }); break;
        case 'reset-filters': activeFilter = 'All'; query = ''; search.value = ''; renderGallery(); container.querySelector('[data-filter="All"]').focus({ preventScroll: true }); break;
        case 'close': dialog.close(); break;
        case 'modal-prev': modalLook = (modalLook + looks.length - 1) % looks.length; renderModal(true); break;
        case 'modal-next': modalLook = (modalLook + 1) % looks.length; renderModal(true); break;
      }
    }
    function onInput(event) { if (event.target === search) { query = search.value; renderGallery(); } }
    function onKey(event) {
      if (!dialog.open) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        modalLook = (modalLook + looks.length + (event.key === 'ArrowLeft' ? -1 : 1)) % looks.length;
        renderModal(true);
      }
    }
    function onBackdrop(event) {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
    function onClose() {
      if (previousOverflow !== null) { document.body.style.overflow = previousOverflow; previousOverflow = null; }
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    }
    container.addEventListener('click', onClick);
    container.addEventListener('input', onInput);
    dialog.addEventListener('keydown', onKey);
    dialog.addEventListener('click', onBackdrop);
    dialog.addEventListener('close', onClose);
    const cleanup = () => {
      if (dialog.open) dialog.close();
      if (previousOverflow !== null) { document.body.style.overflow = previousOverflow; previousOverflow = null; }
      container.removeEventListener('click', onClick);
      container.removeEventListener('input', onInput);
      dialog.removeEventListener('keydown', onKey);
      dialog.removeEventListener('click', onBackdrop);
      dialog.removeEventListener('close', onClose);
    };
    container._firstHumansFunCleanup = cleanup;
    renderFeature(false);
    renderGallery();
    return { unmount: () => { cleanup(); container.innerHTML = ''; } };
  }
  window.FirstHumansFun = { mount };
})();
